import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexchange'
})

export class SexChangePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if((value == 1 && args.length == 0) || (value == 1 && args[0] == true))  return '男'
        if((value == 1 && args.length == 0) || (value == 1 && args[0] == false))  return 'boy'
        if((value == 0 && args.length == 0) || (value == 0 && args[0] == true))  return '女'
        if((value == 0 && args.length == 0) || (value == 0 && args[0] == false))  return 'girl'
    }
}