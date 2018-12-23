import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'check',
    template: `<input type="text" [(ngModel)]="price">
    <button (click)="buy()">购买</button>`,
})

export class CheckComponent implements OnInit {
    constructor(private myRouter:Router) { }
    ngOnInit() { }
    price:string = ''
    buy(){
        // this.myRouter.navigateByUrl('pay/'+this.price)
        this.myRouter.navigate(['pay',{price:this.price}])
    }
}