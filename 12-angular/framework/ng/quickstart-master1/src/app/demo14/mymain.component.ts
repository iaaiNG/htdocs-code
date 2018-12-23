import { Component, OnInit, ViewChild} from '@angular/core'
import {} from '@angular/core'

@Component({
    selector: 'mymain',
    template: `
    <h1>我是主页</h1>
    <button (click)='getd(id)'>获取</button>
    {{id.count}}
    <myheader1 #id></myheader1>
    `,
})

export class MyMainComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        console.log(this.sonInstance)
     }
    @ViewChild('id') sonInstance:any;
    count:number = 0
    getd(data:any){ 
        console.log(data)
        this.count = data.count }
}