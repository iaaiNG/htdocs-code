import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    template: `
     <h1> 这是登录页面 </h1>
     <input type="text" [(ngModel)]="myName"/>
     <br/>
     <button (click)="doLogin()">登录</button>
     <br/>
     <a [routerLink]="['/dashboard',{uname:this.myName}]"> 
     登录 
     </a>
    `
})

export class LoginComponent implements OnInit {
    myName:string="";
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    doLogin(){
        this.myRouter.navigate(
            ['/dashboard',{uname:this.myName}]);
    }
}