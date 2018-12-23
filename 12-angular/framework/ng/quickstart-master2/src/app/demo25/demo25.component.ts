import { Component, OnInit } from '@angular/core';
import { HeartBeatService} from './heartbeat.service'

@Component({
    providers:[HeartBeatService],
    selector: 'demo25',
    template: `
    <button (click)="startBeat()">开始</button>
    <button (click)="stopBeat()">结束</button>
    `
})

export class Demo25Component implements OnInit {
    constructor(private myService:HeartBeatService) { }

    ngOnInit() { }

    startBeat(){
        this.myService.start();
    }

    stopBeat(){
        this.myService.stop();
    }

}