import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value:string,sep:string='') :string{
    
    return value.split('').reverse().join(sep)
  }

}
