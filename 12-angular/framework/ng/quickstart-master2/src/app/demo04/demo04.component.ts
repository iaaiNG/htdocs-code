import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo04',
    templateUrl: './demo04.component.html'
})

export class Demo04Component implements OnInit {
    isMember:boolean = false;
    rightAnswer:string = 'f';
    mylist:Array<any>=[];

    //构造函数是在一个类被实例化成对象的时候，
    //会自动执行的一个方法
    constructor() { 
        //使用typeScript定义符合某种类型的变量
        this.isMember = true;
        
        let list:Array<string> = [];
        let data:any;
        let count:number = 1;
    }

 
    

    ngOnInit() { 
        
    }
}