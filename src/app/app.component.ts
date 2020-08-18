import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from './posts.service';

import { Post } from './post.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  errormsg = null;

  constructor(private http: HttpClient, private pstServ: PostService) {}

  ngOnInit() {
    this.fetchPosts();

  }

  onCreatePost(postData: Post) {
    // this.http.post<{name: string}>('https://learn-angular-a9a14.firebaseio.com/posts.json', postData).subscribe(response=> {
    //   console.log(response);
    // })
    this.pstServ.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
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
        this.errormsg = error.message;
        console.log(error);
      }
    );
  }
}
