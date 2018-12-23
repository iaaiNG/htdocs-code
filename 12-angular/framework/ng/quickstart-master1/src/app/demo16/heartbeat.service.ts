import { Injectable } from '@angular/core';

@Injectable()
export class HeartBeatService {
    heart:any 
    constructor() { }
    start(){
        clearInterval(this.heart)
        this.heart = setInterval(function(){
            console.log("in heart beat")
        },1000)
    }
    stop(){
        clearInterval(this.heart)
    }
}
