import { Component, Input, OnInit,OnDestroy,OnChanges,DoCheck} from '@angular/core';

@Component({
    selector: 'demo33',
    template: `
    <h1>this is demo33</h1>
    `
})

export class Demo33Component implements OnInit, OnDestroy, OnChanges, DoCheck {
    @Input() myNum:number;        
    @Input() myStu:Object;
    constructor() { 
        console.log('demo33 constructor');
    }

    ngOnChanges(){
        console.log('demo33 onChanges');
    }

    ngDoCheck(){
         console.log('数据发生了变化');
    }
    

    ngOnInit() {
         console.log('demo33 onInit');
    }

    ngOnDestroy(){
         console.log('demo33 onDestroy');
    } 
}