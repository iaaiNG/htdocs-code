import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    uName:string="wentworth miller";
    stuList:Array<Object> = [
        {score:80,age:25,sex:1},
        {score:60,age:24,sex:0},
        {score:70,age:23,sex:1},
        {score:88,age:22,sex:1},
        {score:100,age:21,sex:1}
    ];
    constructor() { }

    ngOnInit() { }
}
