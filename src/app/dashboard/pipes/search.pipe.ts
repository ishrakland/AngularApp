import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], title,dsp): any {
    console.log(typeof(dsp))
    if(items && items.length)
    {
      return items.filter(item => 
        {
          if(title && item.title.toLowerCase().indexOf(title.toLowerCase()) === -1)
          {
            return false;
          }
          if( dsp.toString() != item.disponibilite.toString())
          {
            return false;
          }
          return true
        }
      )
      }
      else return true;
    }
    

}
