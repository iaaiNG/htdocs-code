import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})

export class ParentComponent implements OnInit {
    sonName:string="zhangsan";

    constructor() { }

    ngOnInit() { }

    //定义一个事件处理函数
    rcvMsg(data:any){
     console.log("父组件接收到子组件的数据为"+data);
    }

}