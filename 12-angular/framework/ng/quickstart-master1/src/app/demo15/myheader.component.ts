import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myheader',
    template: `
    <span style="font-size:16px">{{isLogin?'登录成功':'注册 | 登录'}}</span>
    `,
})

export class MyHeaderComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
    isLogin:boolean = true
}