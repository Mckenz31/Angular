import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://learn-angular-a9a14.firebaseio.com/posts.json', postData).subscribe(response=> {
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
    this.http.get('https://learn-angular-a9a14.firebaseio.com/posts.json').pipe(map(responz => {
      const array=[];
      for (const key in responz){
        if(responz.hasOwnProperty){
          array.push({...responz[key], id:key});
        }
      }
      return array;
    }))
    .subscribe(responz=> {
      console.log(responz);
    })
  }
}
