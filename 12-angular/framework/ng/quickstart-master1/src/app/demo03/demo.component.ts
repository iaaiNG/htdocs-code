import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html'
})

export class DemoComponent implements OnInit {
    imgUrl:String = '../../img/1.png'
    myMsg:String = ''
    myVal:String = 'Hello World!'
    constructor() { }

    ngOnInit() { }
    check(data:any){
        console.log(data)
    }
}