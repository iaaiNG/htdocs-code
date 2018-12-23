import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'demo12',
    templateUrl: './demo12.component.html'
})

export class Demo12Component implements OnInit {
    userInput:string = "";
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    //跳转到Demo13
    jump(){
        this.myRouter.navigateByUrl('demo13');
    }
    //跳转到Demo14
    jumpToDemo14(){
        this.myRouter
        .navigateByUrl('demo14/'+this.userInput)
    }
}