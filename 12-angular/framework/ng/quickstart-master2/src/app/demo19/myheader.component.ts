import { Component, OnInit,
    Input,Output,EventEmitter}
     from '@angular/core';

@Component({
    selector: 'myheader',
    template: `
    <h2>这是子组件</h2>
    <p>{{version}}</p>
    `
})

export class MyHeaderComponent implements OnInit {
    //接收一个叫做version属性的值，把值存在
    //version这个变量中
    @Input() version:string="";
    //定义一个指定事件的触发器
    @Output() checkLoginEvent = new EventEmitter();
    isUserLogin:boolean = false;

    constructor() { }

    ngOnInit() {
        //触发指定的事件checkLoginEvent
        //将值传递给父组件
        this.checkLoginEvent.emit(this.isUserLogin);
     }
}