import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') highlightColor = 'red';

    constructor(private el: ElementRef, private renderer: Renderer2) {
        console.log('EL', el)
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.highlight(null);
    }

    private highlight(color: string | null): void {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
    }

}
