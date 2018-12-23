import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mail',
    template: `
    <h1>这是邮箱的主页面</h1>
    <router-outlet></router-outlet>
    `,
})

export class MailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}