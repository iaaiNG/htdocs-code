import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'demo2',
    templateUrl: './demo.component.html',
})

export class DemoComponent2 implements OnInit {
    constructor(private myRouter:Router) { }
    ngOnInit() { }
    userInput:string = ''
    jumpTodemo10(){
        this.myRouter.navigateByUrl("demo10/"+this.userInput)
    }
}