import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } 
from '@angular/router';

@Component({
    selector: 'pay',
    template:`
     <h1>这是支付页面</h1>
     <a routerLink="/send">去发货</a>
     <p>{{"商品价格为:"+myPrice}}</p>
    `
})

export class PayComponent implements OnInit {
    myPrice:string = "";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() { 
        //准备接收参数
        this.myAR.params
        .subscribe((data:any)=>{
            console.log(data);
            this.myPrice = data.price;
        })
    }
}