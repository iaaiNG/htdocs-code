import { Component,ViewChild, OnInit } from '@angular/core';


@Component({
    selector: 'mycart',
    template:`
    <h1>这是购物车组件</h1>
    <storeHeader #myHeader></storeHeader>
    <ul *ngIf="isUserLogin">
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
    </ul>
    <a routerLink="/orderConfirm">去结算</a>
    `
})

export class CartComponent implements OnInit {
    isUserLogin:boolean = false;
    //读取本地变量名称为myHeader的组件对象，
    //保存在headerInstance变量中
    @ViewChild('myHeader') headerInstance:any;

    constructor() { }

    ngOnInit() { 
        //调用子组件中的方法
        this.isUserLogin = 
            this.headerInstance.checkUserLogin();
    }
}