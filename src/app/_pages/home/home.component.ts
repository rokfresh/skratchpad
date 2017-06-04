import {Component, OnInit} from '@angular/core';
import {PostsComponent} from "../posts/posts.component";
import {PostsService} from "../posts/posts.service";
import {Post} from "../posts/post";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  providers: [PostsService]
})
export class HomeComponent implements OnInit {

  private postsData : Post[] = [];

  constructor(private postsService : PostsService) {}

  ngOnInit() {
    
    this
      .postsService
      .getPosts()
      .subscribe((res) => {
        this
          .postsService
          .assignPostData(res, this.postsData);
      })
  }

}
