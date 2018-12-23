import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'send',
    template: `<p>发货成功</p>
    <button (click)="jumpToCheck()">商品查看</button>`,
})

export class SendComponent implements OnInit {
    constructor(private myRouter:Router) { }
    ngOnInit() { }
    jumpToCheck(){
        this.myRouter.navigateByUrl('check')
    }
}