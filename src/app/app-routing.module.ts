import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './_pages/about/about.component';
import {ChaptersComponent} from './_pages/chapters/chapters.component';
import {FourOhFourComponent} from './_pages/four-oh-four/four-oh-four.component';
import {HomeComponent} from './_pages/home/home.component';
import {MediaComponent} from './_pages/media/media.component';
import {PostsComponent} from './_pages/posts/posts.component';
import {PostViewComponent} from './_pages/posts/post-view/post-view.component'

const appRoutes : Routes = [
  {
    path: "home",
    component: HomeComponent
  }, {
    path: "media",
    component: MediaComponent
  }, {
    path: "chapters",
    component: ChaptersComponent
  }, {
    path: "about",
    component: AboutComponent
  }, {
    path: "posts",
    component: PostsComponent
  }, {
    path: "posts/:slug",
    component: PostViewComponent
  }, {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "**",
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}