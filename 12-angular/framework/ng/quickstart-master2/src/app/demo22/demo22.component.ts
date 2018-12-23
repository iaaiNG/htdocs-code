import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo22',
    templateUrl: './demo22.component.html'
})

export class Demo22Component implements OnInit {
    //初始化一些数据
    nowDate = new Date();
    stu = {
        name:'lucy',
        age:20
    };
    title = "It is Main Page";
    price = 20.35;
    //总价格
    totalPrice = 300.5;

    trendAge = 20.3;

    info = "hello world";

    tips = "It is a tip";


    constructor() { }

    ngOnInit() { }
}