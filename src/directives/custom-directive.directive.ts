import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective  implements OnChanges {
  
  
   @Input('highlightColor') mouseOverColor:string='blue';
   @Input('appCustomDirective') defaultColor:string='yellow'
  
  constructor(private ele:ElementRef) { 
    console.log(ele);
    
    ele.nativeElement.style.borderRadius='30px'
    // ele.nativeElement.src=""
  }

  ngOnChanges(){
    this.ele.nativeElement.style.border=`2px solid ${this.defaultColor}`

  }

  @HostListener('mouseover')
  over(){
    this.ele.nativeElement.style.borderColor=this.mouseOverColor

  }

  @HostListener('mouseout')
  out(){
    this.ele.nativeElement.style.borderColor=this.defaultColor

  }

}
