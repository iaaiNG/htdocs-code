import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'step1',
    template: `
    <p>{{laptop}}笔记本 1台</p>
    <button (click)="jumoToStep2()">确认订单</button>
    `,
})

export class Step1Component implements OnInit {
    constructor(private  myAR:ActivatedRoute, private myRouter:Router,) { }
    laptop:string = "Mac"
    ngOnInit() { 
        this.myAR.params.subscribe((data:any)=>{
            this.laptop = data.laptop+' ' 
        })
     }
    jumoToStep2(){
        this.myRouter.navigateByUrl('cart/step2')
    }
}