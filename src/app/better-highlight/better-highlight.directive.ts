import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementR: ElementRef, private firstRenderer: Renderer2) { }

  ngOnInit(){
    // this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseenter') mouseover (elem: Element){
    this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'red')
  }

  @HostListener('mouseleave') mouseleave (elem: Element){
    this.firstRenderer.setStyle(this.elementR.nativeElement, 'background-color', 'transparent')
  }

}
