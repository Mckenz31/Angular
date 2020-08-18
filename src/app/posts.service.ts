import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  constructor(private http: HttpClient){}

  createAndStorePosts(title: string, content:string){
    const postData: Post = {title: title, content:content}
    this.http.post<{name: string}>('https://learn-angular-a9a14.firebaseio.com/posts.json', postData).subscribe(response=> {
      console.log(response);
    })
  }

  postData(){
    return this.http.get<{[key:string]: Post}>('https://learn-angular-a9a14.firebaseio.com/posts.json').pipe(map(responz => {
      const array: Post[]=[];
      for (const key in responz){
        if(responz.hasOwnProperty){
          array.push({...responz[key], id:key});
        }
      }
      return array;
    }))
  }
}
