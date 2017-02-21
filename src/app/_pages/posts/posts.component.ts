import {Component, OnInit, Inject} from '@angular/core';
import {PostsService} from './posts.service'
import {Post} from './post';
import {Router} from '@angular/router';
import "rxjs/Rx";

@Component({selector: 'posts', templateUrl: './posts.component.html', styleUrls: ['./posts.component.scss'], providers: [PostsService]})

export class PostsComponent implements OnInit {
  constructor(private postsService : PostsService, private router : Router) {}
  private postsData : Post[] = [];

  ngOnInit() {
    // *** get recent posts *** //
    this
      .postsService
      .getPosts()
      .subscribe((res) => {
        this
          .postsService
          .assignPostData(res, this.postsData);
      });

    // End OnInit
  }

  setPostBg(post) {
    let bg_styles;
    let sp_path = "./../../assets/img/sp_logos/";
    let sp_logos = [
      sp_path + "sp.logo_3d.cal.bears_01.png",
      sp_path + "sp.logo_3d.gsw_01.png",
      sp_path + "sp.logo_3d.sf.giants_01.png",
      sp_path + "sp.logo_3d.oak.raiders_01.png",
      sp_path + "sp.logo_3d.oak.As_02.png"
    ];

    if (post.has_featured) {
      bg_styles = {
        "background-image": "url(\'" + post.feat_media.blog_thumb + "\')",
        "background-size": "100% auto",
        "background-repeat": "no-repeat",
        "background-position": "center"
      };

    } else if (post.has_media) {
      console.log(post);
      console.log(post.media);
      bg_styles = {
        "background-image": "url(\'" + post.media[0].size.blog_thumb + "\')",
        "background-size": "100% auto",
        "background-repeat": "no-repeat",
        "background-position": "center"
      }
    } else {
      bg_styles = {
        "background-image": "url(\'" + sp_logos[Math.floor(Math.random() * sp_logos.length)] + "\')",
        "background-size": "75%",
        "background-repeat": "no-repeat",
        "background-position": "center"
      };
    };
    return bg_styles;

  }

  postSelected(slug : string) {
    this
      .router
      .navigate(['/posts', slug]);
  }

}