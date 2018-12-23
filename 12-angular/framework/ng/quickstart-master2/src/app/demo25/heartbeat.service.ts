import { Injectable } from '@angular/core';

@Injectable()
export class HeartBeatService {
    myTimer:any;
    isBeatEnable:boolean = false;
    constructor() { }

    //开始心跳
    start(){
        if(this.isBeatEnable){
            return;
        }
        this.myTimer = setInterval(()=>{
            console.log(' in heart beat ');
        },1000);
        this.isBeatEnable = true;
    }

    //结束心跳
    stop(){
        clearInterval(this.myTimer);
        this.isBeatEnable = false;
    }
}