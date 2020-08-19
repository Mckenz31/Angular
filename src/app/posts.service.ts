import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  errorsub = new Subject<string>();
  constructor(private http: HttpClient){}

  createAndStorePosts(title: string, content:string){
    const postData: Post = {title: title, content:content}
    let searchParams = new HttpParams;
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('something', 'random');
    this.http.post<{name: string}>('https://learn-angular-a9a14.firebaseio.com/posts.json', postData,
    {
      headers: new HttpHeaders({
        'Custom-Header': 'Hello'
      }),
      // params: new HttpParams().set('print', 'pretty')
      params: searchParams,
      observe: 'response'
    }).subscribe(response=> {
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
    return this.http.delete('https://learn-angular-a9a14.firebaseio.com/posts.json',
    {
      observe: 'events',
      // responseType: 'json' -> This is default cause we are using firebase
    }).pipe(tap(event=> {
      //tap - this wont interupt the return subscription
      console.log(event);
      //event would be of type 0-5 i guess? this can be seen when we type HttpEventType. -> what comes after when we type it shows the type
      if(event.type === HttpEventType.Sent){
        //...
      }
      if(event.type === HttpEventType.Response){
        console.log(event.body);
      }
    }))
  }
}
