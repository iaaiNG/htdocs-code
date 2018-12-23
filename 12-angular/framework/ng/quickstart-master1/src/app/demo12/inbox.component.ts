import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'inbox',
    template: `
    <a routerLink="/mail/outbox">发件箱</a>
    <ul>
    <li>未读邮件1</li>
    <li>未读邮件2</li>
    <li>未读邮件3</li>
    <li>未读邮件4</li>
</ul>`,
})

export class InboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}