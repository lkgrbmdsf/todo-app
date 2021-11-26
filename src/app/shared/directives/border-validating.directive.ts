import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderValidating]',
})
export class BorderValidatingDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.borderRadius = '3px';
  }

  @Input() set appBorderValidating(isValid: boolean) {
    if (!isValid) {
      this.el.nativeElement.style.outline = '2px solid green';
    } else if (isValid) {
      this.el.nativeElement.style.outline = '2px solid red';
    }
  }
}
