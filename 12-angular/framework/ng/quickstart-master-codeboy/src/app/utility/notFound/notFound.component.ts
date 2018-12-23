import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'notFound',
    templateUrl: './notFound.component.html',
})

export class NotFound implements OnInit {
    constructor(private myLocation:Location) { }
    ngOnInit() { }
    comeBack(){ 
        // console.log(this.myLocation)
        this.myLocation.back()}
}