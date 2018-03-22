import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender'
})
export class AppenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' (appended!)';
  }

}
