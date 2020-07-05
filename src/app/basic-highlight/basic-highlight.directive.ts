import {Directive, ElementRef, OnInit} from '@angular/core'


@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor(private elementAcess: ElementRef) {}

  ngOnInit(){
    this.elementAcess.nativeElement.style.backgroundColor = 'violet';
  }

}
