import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07',
    templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {
    constructor() { }

    ngOnInit() { }

    handleLogin(){
        alert('登录成功');
    }

    handleRegister(){
        console.log('请输入对应的信息');
    }
}