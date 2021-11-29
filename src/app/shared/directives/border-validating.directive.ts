import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTitleBorder]',
})
export class TitleBordersDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.borderRadius = '1px';
  }

  @Input() set appTitleBorder(isInvalid: boolean) {
    if (!isInvalid) {
      this.el.nativeElement.style.outline = '1px solid green';
    } else {
      this.el.nativeElement.style.outline = '1px solid red';
    }
  }
}

@Directive({
  selector: '[appDescriptionBorder]',
})
export class DescBordersDirective {
  constructor(private el: ElementRef) {}

  @Input() formTitle?: boolean;

  @Input() set appDescriptionBorder(descIsValid: boolean) {
    if (this.formTitle) {
      if (descIsValid) {
        this.el.nativeElement.style.border = 'none';
        this.el.nativeElement.style.borderRadius = '1px';
        this.el.nativeElement.style.outline = '1px solid green';
      } else {
        this.el.nativeElement.style.border = 'none';
        this.el.nativeElement.style.borderRadius = '1px';
        this.el.nativeElement.style.outline = '1px solid red';
      }
    }
  }
}
