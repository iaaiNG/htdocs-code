import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'check',
    template: `
    <h1> 这是商品查看页面 </h1>
    <button (click)="jumpToPay()">去支付</button>
    `
})

export class CheckComponent implements OnInit {
    constructor(private myRouter:Router,
    private myAR:ActivatedRoute) { }

    ngOnInit() { 
        this.myAR.params
        .subscribe((data:any)=>{
            console.log(data);
        })
    }
   
    //跳转到支付页面
    jumpToPay(){
        this.myRouter.navigateByUrl('/pay/100');
    }
}