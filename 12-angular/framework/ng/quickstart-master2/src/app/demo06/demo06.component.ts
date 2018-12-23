import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo06',
    templateUrl: './demo06.component.html'
})

export class Demo06Component implements OnInit {
    constructor() { }

    ngOnInit() { }

    handleClick(){
        //按钮单击时 会调用的处理函数
        alert("btn is clicked");
    }
}