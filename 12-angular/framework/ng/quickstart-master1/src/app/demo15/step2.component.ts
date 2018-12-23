import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'step2',
    template: `
    <p>需支付：￥6999</p>
    <button routerLink='/cart'>去支付</button>
    `,
})

export class Step2Component implements OnInit {
    constructor() { }
    ngOnInit() { }
    count:number = 10
}