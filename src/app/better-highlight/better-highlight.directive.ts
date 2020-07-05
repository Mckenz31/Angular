import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor = 'lightblue';
  @Input() changedColor = 'yellow'
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elementR: ElementRef, private firstRenderer: Renderer2) { }

  ngOnInit(){
    // this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'red')
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover (elem: Element){
    // this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'red')
    this.backgroundColor = this.changedColor;
  }

  @HostListener('mouseleave') mouseleave (elem: Element){
    // this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'transparent')
    this.backgroundColor= this.defaultColor;
  }

}
