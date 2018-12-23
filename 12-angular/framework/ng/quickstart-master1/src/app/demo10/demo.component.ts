import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'demo10',
    templateUrl: './demo.component.html',
})

export class Demo10Component implements OnInit {
    constructor(private myRoute:ActivatedRoute) { }
    ngOnInit() { 
        this.myRoute.params.subscribe((result:any)=>{
            console.log(result)
            this.rcvMsg = result.uName
        })
    }
    rcvMsg:string = ''
}