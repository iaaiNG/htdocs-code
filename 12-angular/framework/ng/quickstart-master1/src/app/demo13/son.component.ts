import { Component, OnInit } from '@angular/core'
import { Input } from '@angular/core'
import {Output,EventEmitter} from '@angular/core'

@Component({
    selector: 'son',
    template: `
    <h2>我是Son</h2>
    {{mName}}
    <hr>
    <button (click)='trigger()'>click</button>`,
})

export class SonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input('pName') mName:string = ""
    @Output() customEvent = new EventEmitter()
    trigger(){
        console.log(this.customEvent)
        this.customEvent.emit('发送数据给父组件')
    }
}