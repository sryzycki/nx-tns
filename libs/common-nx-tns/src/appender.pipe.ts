import { Pipe, PipeTransform } from '@angular/core';
// This will throw:
// file:///app/tns_modules/@nx-tns/common-nx-tns/src/appender.pipe.js:3:24: JS ERROR Error: Could not find module '@nx-tns/utils'.
// Computed path '/Users/samuel/Library/Developer/CoreSimulator/Devices/4AD8EB7C-0DDD-4385-B6B0-4083DE86AC21/data/Containers/Bundle/Application/32F0E1CD-74BF-4AE6-B5B3-3D5BF435D031/mobile.app/app/tns_modules/@nx-tns/utils'.
import { Utils } from "@nx-tns/utils";

@Pipe({
  name: 'appender'
})
export class AppenderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Utils.parse(value + ' (appended!)');
  }

}
