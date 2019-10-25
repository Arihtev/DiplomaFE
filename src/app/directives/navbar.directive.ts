import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbar]'
})
export class NavbarDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    // this.renderer.setProperty(this.elementRef.nativeElement, 'sideClass', 'top-nav-collapse');
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'SideClass', 'navbar')
  }

}
