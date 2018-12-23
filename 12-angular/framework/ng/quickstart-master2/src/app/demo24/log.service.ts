//a-service

import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    //用来标识 是否是开发模块 
    isDev:boolean = false;

    constructor() { }

    //在服务中 现在定义一个方法，用来输出日志信息
    mylog(msg:any){
        if(this.isDev){
            console.log(msg);
        }
    }
}