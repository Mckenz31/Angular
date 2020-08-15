import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http.post<{name: string}>('https://learn-angular-a9a14.firebaseio.com/posts.json', postData).subscribe(response=> {
      console.log(response);
    })

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.isFetching = true;
    this.http.get<{[key:string]: Post}>('https://learn-angular-a9a14.firebaseio.com/posts.json').pipe(map(responz => {
      const array=[];
      for (const key in responz){
        if(responz.hasOwnProperty){
          array.push({...responz[key], id:key});
        }
      }
      return array;
    }))
    .subscribe(responz=> {
      // console.log(responz);
      this.isFetching = false;
      this.loadedPosts = responz;
    })
  }
}
