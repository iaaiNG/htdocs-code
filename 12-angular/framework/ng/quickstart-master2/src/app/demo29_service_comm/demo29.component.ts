import { Component, OnInit } from '@angular/core';
import {MyService} from './myservice.service'

@Component({
    selector: 'demo29',
    providers:[MyService],
    template: `
     <h1>demo29</h1>
     <button (click)="handleClick()">向服务的数组中插入数据</button>
     <hr/>
     <demo30></demo30>
    `
})

export class Demo29Component implements OnInit {
    constructor(private myservice:MyService) { }

    ngOnInit() { }

    handleClick(){
        //向服务中写数据
        this.myservice.list.push(100);
        console.log("写操作完成之后:",this.myservice.list);
    }
}