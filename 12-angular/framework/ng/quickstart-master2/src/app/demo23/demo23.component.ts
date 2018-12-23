import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo23',
    template:`
     <h1> 这是一个自定义管道类的案例 </h1>
     <p>{{price | mycurrency}}</p>
     <h3>{{uSex | sexchange:false}}</h3>
    `
})

export class Demo23Component implements OnInit {
    price:number = 20;
    uSex:number = 0;
    constructor() { }

    ngOnInit() { }
}