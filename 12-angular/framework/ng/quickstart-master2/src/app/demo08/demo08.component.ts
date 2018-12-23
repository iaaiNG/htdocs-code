import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo08',
    templateUrl: './demo08.component.html'
})

export class Demo08Component implements OnInit {
    imgUrl:string="img/1.jpg";
    linkUrl:string = "http://www.baidu.com";
    myValue:string = "Hello NgModel";
    myResult:string = "hello world";
    myName:string = "";
    constructor() { }

    ngOnInit() { }

    //当myName这个模型数据发生变化时
    //要执行该方法
    handleModelChange(data:any){
        console.log(this.myName);
       // console.log(data);
    }
}