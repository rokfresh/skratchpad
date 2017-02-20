import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Post} from './post'
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {

  constructor(private http : Http) {}

  private wp_URL : string = "http://skratchpadworldwide.com/wp-json/wp/v2";
  private posts_URL : string = "http://skratchpadworldwide.com/wp-json/wp/v2/posts";
  private post_media_URL : string = "http://skratchpadworldwide.com/wp-json/wp/v2/media";
  private headers : Headers = new Headers({"Content-Type": "application/json"});

  public postsList : Post[];

  getPosts() : Observable < any > {
    return this
      .http
      .get(this.posts_URL, this.headers)
      .map((res : Response) => res.json())
      .catch((err : any) => Observable.throw(console.log(err.json()) || "Error"));
  }

  getPostMedia(post_id : number) : Observable < any > {
    return this
      .http
      .get(this.post_media_URL + `?parent=${post_id}`, this.headers)
      .map((res : Response) => res.json())
      .catch((err : any) => Observable.throw(err.json()) || "Error");
  }

  getPostFeatMedia(feat_id : number) : Observable < any > {
    return this
      .http
      .get(this.post_media_URL + `/${feat_id}`, this.headers)
      .map((res : Response) => res.json())
      .catch((err : any) => Observable.throw(err.json()) || "Error");
  }

  getPost(slug : string) : Observable < Post > {
    return this
      .http
      .get(this.posts_URL + `?slug=${slug}`, this.headers)
      .map((res) => res.json())
      .catch((err : any) => Observable.throw(console.log(err.json()) || "Error"));
  }

  assignPostData(inData, outData): void {
    inData.forEach((data, i) => {
      outData[i] = {
        id: data.id,
        date: data.date,
        title: data.title.rendered,
        content: data.content.rendered,
        slug: data.slug,
        feat_media: {},
        media: []
      }
      // *** get media for each post *** //
      this
        .getPostMedia(data.id)
        .subscribe((res) => {
          outData[i].media = res;
        });
      // *** get featured media for post *** //
      if (data.featured_media) {
        this
          .getPostFeatMedia(data.featured_media)
          .subscribe((res) => {
            let sizes = res.media_details.sizes
            outData[i].feat_media.type = res.media_type;
            if (res.media_type == "image") {
              outData[i].feat_media.full = sizes.full.source_url;
              outData[i].feat_media.blog = sizes["argent-blog-thumbnail"].source_url;
            } else {
              outData[i].feat_media = {};
            }

          })
      }
    });
    console.log(outData, "from posts service.");
    console.log(outData.length);
  }
}
