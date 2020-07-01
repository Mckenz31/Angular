import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterViewInit,
  AfterContentChecked, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('alias') element: {name:string, type:string, content:string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('useContentChild', {static:true}) contentChildValue: ElementRef;

  constructor() {
    console.log('tada')
  }

  ngOnInit(): void {
    console.log('hello');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ngOnChanges');
    console.log(changes)
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    console.log('Obtains only afterViewInit:' + this.header.nativeElement.textContent)
    console.log('Obtains only afterViewInit:' + this.contentChildValue.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }


}
