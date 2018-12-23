import { Component, OnInit,
    Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'son',
    templateUrl: './son.component.html'
})

export class SonComponent implements OnInit {
    //准备接收父组件传来的数据
    // @Input() myName:string="";
    // 给输入属性myName起个别名叫做uName
    // 注意：并不建议起命名
    @Input('myName') uName:string;
    
    //通过output指定了事件触发器，
    //触发的事件名字是customEvent
    @Output() customEvent = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    //触发事件，这是一个自定义的方法
    triggerEvent(){
        //触发事件并传参
        this.customEvent.emit('用户已登录');
    }
}