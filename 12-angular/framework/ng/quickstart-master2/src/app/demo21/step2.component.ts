import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'step2',
    template: `
     <h3> 这是订单确认的第二步，进行支付</h3>
    `
})

export class Step2Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}