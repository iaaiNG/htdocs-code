import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'dashboard',
    template: `
     <h1>这是主页面 {{userName}}</h1>
    `
})

export class DashboardComponent implements OnInit {
    userName:string = "";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() { 
        //接收通过路由传递来的参数？
        this.myAR.params.subscribe(
            (data:any)=>{
                console.log(data);
                this.userName = data.uname;
            }
        )
    }
}