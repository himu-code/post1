import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostComponent } from './post/post.component';
import { Post1Component } from './post1/post1.component'
import { PostService } from './post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component'
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post1Component,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
    GalleryComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'post1', component: Post1Component},
      { path : 'post1/:pid', component :PostViewComponent },
      { path:'gallery', component: GalleryComponent}
    ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
