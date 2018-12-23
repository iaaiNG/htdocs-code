import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07',
    templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {
    constructor() { }

    ngOnInit() { }

    register(){alert("注册成功")}
    login(){ console.log("请输入用户名和密码") }
}