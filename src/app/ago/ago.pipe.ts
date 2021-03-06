import { Pipe, PipeTransform } from '@angular/core';

const milliSecondsInDay = 1000 * 3600 * 24;
const ago = new (Intl as any).RelativeTimeFormat('en');

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(utcTime: string): string { 
    const diffInMillicseconds =
    new Date(utcTime).getTime() - new Date().getTime();
    const diffInDays = Math.round(diffInMillicseconds / milliSecondsInDay);
    return ago.format(diffInDays, 'day');
  }

}
