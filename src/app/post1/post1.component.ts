import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
//import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {
  posts : any[];
  
  constructor(private service : PostService) {  
   }
   ngOnInit() 
  {
      this.service.getPost()
      .subscribe(response =>
        {
          this.posts= response.json()
        },error =>{
          alert('This Is Unexpected error')
          
        
        })
  }

   createData(input : HTMLInputElement)
   {
      let post = {title : input.value};
     this.service.createPost(post)
      .subscribe(response =>{
        post['id']= response.json();
        console.log(response.json());
        this.posts.splice(0,0,post);
        console.log(this.posts);
      })
   }
   updateData(post)
   {
     this.service.updatePost(post)
     .subscribe(response =>
      {
        console.log(response.json());
      },error=>{
        alert('This Is Unexpected Error')
      })
   }
   deleteData(post)
   {
    this.service.deletePost(post)
     .subscribe(response =>
       {
         let index = this.posts.indexOf(post)
         this.posts.splice(index , 1);
         console.log(response.json());
       },
       (error:Response)=>{
         if(error.status===404)
          alert('This Post Has Alredy Has Been Deleted')
        else{
          alert('An unexpected error occurred')
        }
      
       })
   }

 
}
