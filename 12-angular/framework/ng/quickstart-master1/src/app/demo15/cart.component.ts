import { Component, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'cart',
    template: `
    <h1>购物车主页<myheader #checkLogin></myheader></h1>
    <ul *ngIf='isLogin' style="list-style:none">
        <li><label><input type="radio" value="Mac" [(ngModel)]="laptop">Mac</label></li>
        <li><label><input type="radio" value="Dell" [(ngModel)]="laptop">Dell</label></li>
        <li><label><input type="radio" value="小米" [(ngModel)]="laptop">小米</label></li>
        <li><label><input type="radio" value="神舟" [(ngModel)]="laptop">神舟</label></li>
    </ul>{{laptop}}
    <button (click)="jumpToStep1()">提交订单</button>
    <router-outlet></router-outlet>
    `,
})

export class CartComponent implements OnInit {
    @ViewChild('checkLogin') headerInstance:any
    constructor(private myRouter:Router) { }
    
    ngOnInit() { 
       this.isLogin = this.headerInstance.isLogin
    }
    isLogin:boolean = false
    laptop:string = 'Mac'
    jumpToStep1(){
        this.myRouter.navigate(['cart/step1',{laptop:this.laptop}])
    }
}