import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'send',
    template:`
     <h1> 这是商品的发货页面 </h1>
     <button (click)="jumpToCheck()">查看商品</button>
    `
})

export class SendComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    jumpToCheck(){
        this.myRouter.navigate(['/check',{id:10}]);
    }
}