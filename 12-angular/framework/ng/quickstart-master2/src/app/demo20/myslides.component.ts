import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myslides',
    template: `
        <h2>这是轮播图组件</h2>
    `
})

export class MySlidesComponent implements OnInit {
    slideCount:number = 10;
    constructor() { }

    ngOnInit() { }
}