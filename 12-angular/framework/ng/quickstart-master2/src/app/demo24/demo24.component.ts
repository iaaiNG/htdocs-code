import { Component, OnInit } from '@angular/core';
import {LogService} from './log.service'


@Component({
    selector: 'demo24',
    template: `
        <h1> 这是和服务相关的案例 </h1>
        <button (click)="handleClick()">clickMe</button>
    `
})

export class Demo24Component implements OnInit {
    constructor(private myLogService:LogService) 
    { }

    ngOnInit() { }

    handleClick(){
        //console.log('user money:1000000000');
        this.myLogService
        .mylog('user money:1000000000');
    }
}