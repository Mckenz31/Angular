import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  errormsg = null;
  private sub: Subscription;

  constructor(private http: HttpClient, private pstServ: PostService) {}

  ngOnInit() {
    this.sub = this.pstServ.errorsub.subscribe(error => {
      console.log(error);
      this.errormsg = error;
    })
    this.fetchPosts();

  }

  errorClick(){
    this.errormsg = null;
  }

  onCreatePost(postData: Post) {
    this.pstServ.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.pstServ.deleteData().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts(){
    this.isFetching = true;
    this.pstServ.postData().subscribe(responzz => {
      // console.log(responz);
      this.isFetching = false;
      this.loadedPosts = responzz;
      }, error => {
        this.isFetching = false;
        this.errormsg = error.message;
        console.log(error);
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
