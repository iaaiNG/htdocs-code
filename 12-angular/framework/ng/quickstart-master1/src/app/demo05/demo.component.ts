import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
})

export class DemoComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
    value:number = 0;
    timer:any = ''
    change(){
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
            this.value += 0.1 
            this.value > 1 && (this.value = 0)
        },100)
    }
}