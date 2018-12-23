import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo11',
    template: `
        <h2 test> it is a component 
        about custom directive</h2>
    `
})

export class Demo11Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}