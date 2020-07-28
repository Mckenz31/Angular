import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

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

    this.sub = Observ.subscribe(dataz => {
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
