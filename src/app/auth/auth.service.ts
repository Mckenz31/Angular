import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient){}

  user = new Subject<User>();

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAws2KcbMhjA4mFmCHJEmU4ALUTfcJOpWQ', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(responz => {
      this.handleAuthentication(responz.email, responz.localId, responz.idToken, +responz.expiresIn);
    }))
  }

  login(email: string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAws2KcbMhjA4mFmCHJEmU4ALUTfcJOpWQ', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(responz => {
      this.handleAuthentication(responz.email, responz.localId, responz.idToken, +responz.expiresIn);
    }))
  }

  private handleAuthentication(email: string,userId: string,token: string,expiresIn: number){
    const expiration = new Date(new Date().getTime() + +expiresIn * 1000)
    const uzer = new User(email, userId, token, expiration);
    this.user.next(uzer);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An Unknown Error Occured';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage = 'This Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This Email is not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This Password is incorrect';
        break;
    }
    return throwError(errorMessage);
  }
}
