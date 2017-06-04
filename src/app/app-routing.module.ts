import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutComponent} from './_pages/about/about.component';
import {ChaptersComponent} from './_pages/chapters/chapters.component';
import {PageNotFoundComponent} from './_pages/page-not-found/page-not-found.component';
import {HomeComponent} from './_pages/home/home.component';
import {MediaComponent} from './_pages/media/media.component';
import {PostsComponent} from './_pages/posts/posts.component';
import {PostViewComponent} from './_pages/posts/post-view/post-view.component'

const appRoutes: Routes = [{
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
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}