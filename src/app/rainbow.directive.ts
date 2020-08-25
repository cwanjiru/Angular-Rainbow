import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  possible_colors=[
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ]
  constructor() { }
  @HostBinding('style.color') color:string;
  @HostBinding('style.border-class') borderColor:string;
  @HostListener('keydown') newColor(){
    const colorPick = Math.floor(Math.random()* this.possible_colors.length);
    this.color = this.borderColor = this.possible_colors[colorPick];
  }


}
