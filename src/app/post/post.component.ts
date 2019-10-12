import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts : any[];
url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : Http) { 
this.http.get(this.url)
.subscribe(response =>
  {
    this.posts= response.json();
  })

  }
  createData(input : HTMLInputElement)
  {
    let post = {title : input.value}
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response =>
      {
        post['id']= response.json();
        console.log(response.json());
        this.posts.splice(0,0,post);
        console.log(this.posts);
      })
  }
  updateData(post)
  {
    this.http.put(this.url + '/' + post.id , JSON.stringify(post))
    .subscribe(response =>
      {
        console.log(response.json());
      })
  }
  deleteData(post)
  {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response =>
      {
        let index = this.posts.indexOf(post)
        this.posts.splice(index , 1);
        //console.log(response.json());
      })
  }

  ngOnInit() {
  }

}
