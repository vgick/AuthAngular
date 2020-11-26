import {Directive, HostBinding, HostListener} from '@angular/core';

/**
 * Директива для смены фона элемента при смене фокуса.
 */
@Directive({
  selector: '[appFocusBackgroundColor]'
})
export class FocusBacgroundColorDirective {
  /**
   * Привязка цвета фона.
   */
  @HostBinding('style.background-color') backgroundColor = null;

  /**
   * Привязка к наведению фокуса.
   */
  @HostListener('focus', ['$event.target'])
  onFocus(): void {
    this.backgroundColor  = '#fff';
  }

  /**
   * Привязка при потере фокуса.
   */
  @HostListener('blur', ['$event.target'])
  onBlur(): void {
    this.backgroundColor  = '#f2f4f5';
  }
}
