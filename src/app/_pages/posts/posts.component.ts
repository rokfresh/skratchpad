import {Component, OnInit, Inject} from '@angular/core';
import {PostsService} from './posts.service'
import {Post} from './post';
import {Router} from '@angular/router';
import "rxjs/Rx";

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})

export class PostsComponent implements OnInit {
  constructor(private postsService : PostsService, private router : Router) {}
  private postsData : Post[] = [];
  private hasFeatured : Boolean = false;
  private hasMedia : Boolean = false;

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

  postSelected(slug : string) {
    this
      .router
      .navigate(['/posts', slug]);
  }
}