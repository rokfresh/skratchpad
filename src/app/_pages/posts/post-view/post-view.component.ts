import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Post} from '../post';
import {PostsService} from '../posts.service';
import {PostsComponent} from '../posts.component'

@Component({
  selector: 'post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  providers: [PostsService]
})

export class PostViewComponent implements OnInit {

  private postsData : Post[] = [];
  private post : Post;
  _loading : Boolean = true;

  constructor(private postsService : PostsService, private route : ActivatedRoute) {}

  grabPost(slug : string) : void {
    this
      .postsService
      .getPost(slug)
      .subscribe((res) => {
        this
          .postsService
          .assignPostData(res, this.postsData);
        this.post = this.postsData[0];
        this._loading = false;
      });
  }

  ngOnInit() {
    this
      .route
      .params
      .forEach((params : Params) => {
        let slug = params['slug'];
        this.grabPost(slug);
      });
  }
}