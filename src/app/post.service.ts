import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { post } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : Http) { }
  getPost()
  {
   return this.http.get(this.url)
  }
  getPostBYID(postID)
  {
    return this.http.get(this.url+'/'+postID)
  }
  createPost(post)
  {
   return this.http.post(this.url , JSON.stringify(post))
  }
  updatePost(post)
  {
    return this.http.put(this.url + '/' + post.id , JSON.stringify(post))
  }
  deletePost(post)
  {
    return  this.http.delete(this.url + '/' + post.id)
  }
}
