import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from './custom.service'

@Component({
    providers:[ CheckLoginService ],
    selector: 'demo17',
    template: `
    <h1>http服务</h1>
    <button (click)="getMsg()">获取信息</button>`
})

export class Demo17Component implements OnInit {
    constructor(private myCL:CheckLoginService) { }

    ngOnInit() { }
    getMsg(){
        this.myCL.sendRequest('http://jsonplaceholder.typicode.com/users')
            .subscribe((data:any)=>{
                console.log(data)
            })
    }
}