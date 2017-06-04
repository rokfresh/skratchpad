import {Component, OnInit, Inject} from '@angular/core';
import {PostsService} from './posts.service'
import {Post} from './post';

import "rxjs/Rx";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})


export class PostsComponent implements OnInit {
  constructor(private postsService : PostsService) {}
  private postsData : Post[] = [];
  private bg_styles : {};
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
    let sp_path = "./../../assets/img/sp_logos/";
    let sp_logos = [
      sp_path + "sp.logo_3d.cal.bears_01.png",
      sp_path + "sp.logo_3d.gsw_01.png",
      sp_path + "sp.logo_3d.sf.giants_01.png",
      sp_path + "sp.logo_3d.oak.raiders_01.png",
      sp_path + "sp.logo_3d.oak.As_02.png"
    ];

    if (post.has_featured) {
      this.bg_styles = {
        "background-image": "url(\'" + post.feat_media.full + "\')",
        "background-size": "100% auto",
        "background-repeat": "no-repeat",
        "background-position": "center"
      };

    } else if (post.has_media) {
     
      this.bg_styles = {
        "background-image": "url(\'" + post.media[0].size.full + "\')",
        "background-size": "100% auto",
        "background-repeat": "no-repeat",
        "background-position": "center"
      }
    } else {
      this.bg_styles = {
        "background-image": "url(\'" + sp_logos[Math.floor(Math.random() * sp_logos.length)] + "\')",
        "background-size": "75% auto",
        "background-repeat": "no-repeat",
        "background-position": "center"
      };
    };
    return this.bg_styles;

  }


}