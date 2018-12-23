import { Component, OnInit } from '@angular/core'
import {  HeartBeatService } from './heartbeat.service'

@Component({
    providers:[ HeartBeatService ],
    selector: 'demo',
    // templateUrl:'./demo.component.html',
    template: `
    <h1>Angular服务——心跳服务</h1>
    <button (click)="start()">START</button>
    <button (click)="stop()">STOP</button>`
})

export class DemoComponent implements OnInit {
    nowDate = new Date()
    constructor(private heartService:HeartBeatService) { }

    ngOnInit() { }
    start(){
        this.heartService.start()
    }
    stop(){
        this.heartService.stop()
    }
}