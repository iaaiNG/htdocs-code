import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'not-found',
    template: `
    <h1>404 page not found</h1>
    <button (click)="backToPrev()">返回</button>`,
})

export class NotFound implements OnInit {
    constructor(private myLocation:Location) { }
    ngOnInit() { }
    backToPrev(){ 
        // console.log(this.myLocation)
        this.myLocation.back()}
}