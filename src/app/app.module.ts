
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ChaptersComponent } from './_pages/chapters/chapters.component';
import { HomeComponent } from './_pages/home/home.component';
import { MediaComponent } from './_pages/media/media.component';
import { PostsComponent } from './_pages/posts/posts.component';
import { FourOhFourComponent } from './_pages/four-oh-four/four-oh-four.component';
import { AboutComponent } from './_pages/about/about.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "media",  component: MediaComponent }, 
  { path: "chapters", component: ChaptersComponent },
  { path: "about", component: AboutComponent }, 
  { path: "", redirectTo: "/home", pathMatch: "full"}, 
  { path: "**", component: FourOhFourComponent }
];

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
