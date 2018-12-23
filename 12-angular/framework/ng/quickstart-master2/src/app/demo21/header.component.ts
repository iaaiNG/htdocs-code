import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'storeHeader',
    template: `
     <h5>我是页头</h5>
    `
})

export class StoreHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    //定义一个方法，用来返回true/false
    checkUserLogin(){
        return false;
    }
}