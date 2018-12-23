import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'outbox',
    template: `
    <a routerLink="/mail/inbox">收件箱</a>
    <ul>
    <li>已发邮件1</li>
    <li>已发邮件2</li>
    <li>已发邮件3</li>
    <li>已发邮件4</li>
</ul>`,
})

export class OutboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}