import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'demo1',
    templateUrl: './demo.component.html',
})

export class DemoComponent1 implements OnInit {
    constructor(private myRouter:Router) { }
    ngOnInit() { }
    jump(){
        console.log(this.myRouter)
        this.myRouter.navigateByUrl('demo2')
    }
}