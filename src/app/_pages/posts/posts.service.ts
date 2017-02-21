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

  assignPostData(alpha, beta) : void {
    alpha.forEach((data, i) => {
      beta[i] = {
        id: + data.id,
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
          beta[i].has_media = (res.length !== 0
            ? true
            : false);
          if (beta[i].has_media) {
            res.forEach((mediaData, j) => {
              beta[i].media[j] = {
                media_id: mediaData.id,
                title: mediaData.title.rendered,
                type: mediaData.media_type,
                mime: mediaData.mime_type
              };
              beta[i].media[j].size = (mediaData.media_type == "image"
                ? {
                  full: mediaData.media_details.sizes.full.source_url,
                  thumb: mediaData.media_details.sizes.thumbnail.source_url,
                  blog_thumb: mediaData.media_details.sizes["argent-project-thumbnail"].source_url,
                  large: (mediaData.media_details.width > 1024 && mediaData.media_details.sizes.large
                    ? mediaData.media_details.sizes.large.source_url
                    : null)
                }
                : {})

            });
          }
        });
      // *** get featured media for post *** //
      if (data.featured_media) {
        beta[i].has_featured = true;
        this
          .getPostFeatMedia(data.featured_media)
          .subscribe((res) => {
            let sizes = res.media_details.sizes
            beta[i].feat_media.type = res.media_type;
            if (res.media_type == "image") {
              beta[i].feat_media.full_img = sizes.full.source_url;
              beta[i].feat_media.blog_thumb = sizes["argent-project-thumbnail"].source_url;
              beta[i].feat_media.large_img = (res.media_details.width > 1024 && sizes.large
                ? sizes.large.source_url
                : null)
            } else {
              beta[i].feat_media.video = res.source_url;
            }
          })
      }
    });
  }
}
