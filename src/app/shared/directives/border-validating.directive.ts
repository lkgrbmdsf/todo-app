import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTitleBorder]',
})
export class TitleBordersDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.borderRadius = '3px';
  }

  @Input() set appTitleBorder(isInvalid: boolean) {
    if (!isInvalid) {
      this.el.nativeElement.style.outline = '2px solid green';
    } else {
      this.el.nativeElement.style.outline = '2px solid red';
    }
  }
}

@Directive({
  selector: '[appDescriptionBorder]',
})
export class DescBordersDirective {
  constructor(private el: ElementRef) {}

  @Input() set appDescriptionDirective(isInvalid: boolean) {
    //TODO: enabled directive borders
  }
}
