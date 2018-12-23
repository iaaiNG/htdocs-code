import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mycurrency'
})

export class MyCurrencyPipe implements PipeTransform {
    //管道的本质就是一个有参数，有返回值的方法

    //value是通过竖杠传来的表达式的结果
    //args这个数组 记录是给管道所指定的各个参数
    transform(value: any, ...args: any[]): any {

        console.log(value);
        console.log(args);  
        return '$'+value;     
    }
}