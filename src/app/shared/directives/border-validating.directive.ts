import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderValidating]',
})
export class BorderValidatingDirective {
  constructor(private el: ElementRef) {}

  @Input() set appBorderValidating(isValid: boolean) {
    if (!this.el.nativeElement.disabled) {
      if (!isValid) {
        this.el.nativeElement.style.border = '2px solid green';
        this.el.nativeElement.style.borderRadius = '5px';
      } else if (isValid) {
        this.el.nativeElement.style.border = '2px solid red';
        this.el.nativeElement.style.borderRadius = '5px';
      }
    }
  }
}
