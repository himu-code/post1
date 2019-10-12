import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
//import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  post : any[];
  constructor(
    private route: ActivatedRoute,
    private service: PostService,
    private routerRedirect : Router) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>
      {
        let pid = +params.get('pid');
        console.log(pid);
        this.service.getPostBYID(pid)
        .subscribe(response =>
          {
            console.log(response.json());
            this.post = response.json();
          })

      });
  }
  back()
  {
    this.routerRedirect.navigate(['/post']);
  }

}
