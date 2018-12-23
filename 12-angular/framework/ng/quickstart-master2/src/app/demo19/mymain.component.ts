import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mymain',
    template: `
        <h1>这是主页面</h1>
        <ul *ngIf="loginResult">
            <li>test01</li>
            <li>test02</li>
            <li>test03</li>
        </ul>
        <hr/>
        <myheader
         (checkLoginEvent)="rcvUserLogin($event)"
         version="2.0"></myheader>
    `
})

export class MyMainComponent implements OnInit {
    loginResult:boolean=false;
    constructor() { }

    ngOnInit() { }
    //定义一个事件处理函数
    rcvUserLogin(data:any){
        console.log(data);
        this.loginResult = data;
    }
}