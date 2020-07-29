import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor() { }

  ngOnInit() {
    // this.sub = interval(1000).subscribe(data=>{
    //   console.log(data);
    // })
    const Observ = Observable.create(observer => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        if(count===5){
          observer.complete();
        }
        if(count>3){
          observer.error(new Error ('We got an error'));
        }
        count++
      }, 1000)
    } )

    Observ.pipe(filter((dataz:number) => {
      return dataz>0
    }),map((dataz:number) => {
      return 'Round' + (dataz+1);
    })).subscribe(dataz => {
      console.log(dataz);
    }, error => {
      console.log(error)
    }, () => {
      console.log('complete')
    }
    )
  }



  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
