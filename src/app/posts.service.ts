import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  errorsub = new Subject<string>();
  constructor(private http: HttpClient){}

  createAndStorePosts(title: string, content:string){
    const postData: Post = {title: title, content:content}
    this.http.post<{name: string}>('https://learn-angular-a9a14.firebaseio.com/posts.json', postData).subscribe(response=> {
      console.log(response);
    }, error => {
      this.errorsub.next(error.message);
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
    }),
    catchError(errorR => {
      return throwError(errorR);
    })
    )
  }

  deleteData(){
    return this.http.delete('https://learn-angular-a9a14.firebaseio.com/posts.json');
  }
}
