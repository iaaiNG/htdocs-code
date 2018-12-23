import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'storeStep3',
    templateUrl: './storeStep3.component.html'
})

export class Step3Component implements OnInit,OnDestroy {
    time:number = 5
    timer:any
    constructor(private myRouter:Router) { }

    ngOnInit() { this.timeUp() }
    ngOnDestroy() { clearInterval(this.timer)}
    timeUp(){
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
            if(this.time != 0) this.time-- 
            else {
                clearInterval(this.timer)
                this.myRouter.navigateByUrl('/index')
            }
       },1000) 
    }
}