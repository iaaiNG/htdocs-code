import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo32',
    template: `
    <h1>this is demo32</h1>
    <button (click)="handleClick()">clickMe</button>
    <hr/>
    <demo33 *ngIf="count<3" [myStu]="stu" [myNum]="count"></demo33>
    `
})

export class Demo32Component implements OnInit {
    stu={age:10,score:60};
    count:number = 0;
    constructor() { }

    ngOnInit() { }

    handleClick(){
        // this.count++;
        this.stu.score++;
    }
}