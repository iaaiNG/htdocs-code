import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo02',
    templateUrl: './demo02.component.html'
})

export class Demo02Component implements OnInit {
    isShow:boolean = true
    rightAnswer:string = "c"
    constructor() {
       let list:Array<string> = []
       let data:any
       let count:number
     }

    ngOnInit() { }
}