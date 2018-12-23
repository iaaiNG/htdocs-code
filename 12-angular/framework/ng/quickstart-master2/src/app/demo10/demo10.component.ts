import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo10',
    template: `
    <p [ngStyle]="{opacity:opacityValue}"> it is a paragraph </p>
    <button (click)="handleClick()">clickMe</button>
    `
})

export class Demo10Component implements OnInit {
    opacityValue = 0;
    constructor() { }

    ngOnInit() { }

    handleClick(){
        //启动定时器，修改数据
        setInterval(()=>{
            this.opacityValue+=0.1;
            if(this.opacityValue > 1)
            {
                this.opacityValue = 0;
            }
        },500)
    }
}