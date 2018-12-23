import { Component, OnInit } from '@angular/core';
import {MyHttpService} 
from './myhttp.service'

@Component({
    selector: 'demo26',
    template: `
        <ul>
            <li *ngFor="let tmp of myList">
                {{tmp.name}}
            </li>
        </ul>
        <button (click)=" handleClick()">加载更多</button>
    `
})

export class Demo26Component implements OnInit {
    myList:Array<any> = [];
    //myList:any[] = [];

    constructor(
     private myService:MyHttpService) { }

    ngOnInit() { }

    handleClick(){
        //向服务器端发起请求
        this.myService
        .sendRequest(
            "http://jsonplaceholder.typicode.com/users")
        .subscribe((result:any)=>{
            console.log(result);
            this.myList = result;
        })
    }
}