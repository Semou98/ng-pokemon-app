import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5' //Couleur: White smoke (proche de gris)
  private defaultColor: string = '#009688' //Couleur: Vert cyan
  private defaultHeight: number = 180

  constructor(private el: ElementRef){
    this.setBorder(this.initialColor)
    this.setHeight(180)
  }

  @Input('pkmnBorderCard') borderColor: string

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }

  private setBorder(color: string){
    let border = `solid 4px ${color}`
    this.el.nativeElement.style.border = border
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${this.defaultHeight}px`
  }
}

