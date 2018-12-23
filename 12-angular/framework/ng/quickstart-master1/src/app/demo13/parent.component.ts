import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    template: `
    <h1>我是Parent</h1>
    <son [pName]="jkm" (customEvent)="rcvMsg($event)"></son>
    `,
})

export class ParentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    jkm:string = "iaaiNG"
    rcvMsg(data:any){
        console.log(data)
    }
}