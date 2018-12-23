import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myheader1',
    template: `
    <h2>我是页头</h2>
    `,
})

export class MyHeader1Component implements OnInit {
    constructor() { }
    ngOnInit() { }
    count:number = 10
}