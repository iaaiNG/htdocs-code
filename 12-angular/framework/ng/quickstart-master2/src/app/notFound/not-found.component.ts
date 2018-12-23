import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'notFound',
    template: `
    <h1>404 page not found</h1>
    <button (click)="backToPrev()">返回</button>
    `
})

export class NotFoundComponent implements OnInit {
    constructor(private myLocation:Location) { }

    ngOnInit() { }

    //返回上一个
    backToPrev(){
        this.myLocation.back();
    }
}