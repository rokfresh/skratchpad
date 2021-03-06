// ### module imports ###
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// ### component imports ###
import {AppComponent} from './app.component';
import {AppBodyComponent} from './app-body/app-body.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {AppFooterComponent} from './app-footer/app-footer.component';
import {ChaptersComponent} from './_pages/chapters/chapters.component';
import {HomeComponent} from './_pages/home/home.component';
import {MediaComponent} from './_pages/media/media.component';
import {PostsComponent} from './_pages/posts/posts.component';
import {AboutComponent} from './_pages/about/about.component';
import {PostViewComponent} from './_pages/posts/post-view/post-view.component';
import {PageNotFoundComponent} from './_pages/page-not-found/page-not-found.component';
import {DjProfileComponent} from './_pages/dj-profile/dj-profile.component';
// ### sevice imports ###
import {PostsService} from './_pages/posts/posts.service';

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
    AboutComponent,
    PostViewComponent,
    PageNotFoundComponent,
    DjProfileComponent
  ],
  entryComponents: [DjProfileComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule, NgbModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})

export class AppModule {}