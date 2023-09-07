import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective {
  @Input() color: string = 'white';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);

  }
  ngOnInit() {
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
    //this.document.body.style.backgroundColor = this.color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'green'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'white'
    );
  }
}
