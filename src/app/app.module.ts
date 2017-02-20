import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {AppBodyComponent} from './app-body/app-body.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {ChaptersComponent} from './_pages/chapters/chapters.component';
import {HomeComponent} from './_pages/home/home.component';
import {MediaComponent} from './_pages/media/media.component';
import {PostsComponent} from './_pages/posts/posts.component';
import {FourOhFourComponent} from './_pages/four-oh-four/four-oh-four.component';
import {AboutComponent} from './_pages/about/about.component';

import {PostsService} from './_pages/posts/posts.service';
import {PostViewComponent} from './_pages/posts/post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ChaptersComponent,
    HomeComponent,
    PostsComponent,
    MediaComponent,
    FourOhFourComponent,
    AboutComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]

})
export class AppModule {}