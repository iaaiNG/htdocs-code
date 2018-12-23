import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'pay',
    template: `
    <P>商品价格：￥{{price}}</P>
<a routerLink = '/send'>去发货</a>`,
})

export class PayComponent implements OnInit {
    constructor(private myRoute:ActivatedRoute) { }
    ngOnInit() { 
        console.log(this.myRoute.params)
        this.myRoute.params.subscribe((result:any)=>{
            this.price = result.price
        })
    }
    price:string = ''
}