import {Component} from '@angular/core';

@Component({
    selector:'demo03',
    template:`
    <ul>
        <li *ngFor="let tmp of myList;
            let myIndex=index">
            {{"myIndex is "+myIndex+" tmp is "+tmp}}
        </li>
    </ul>
    `
})

export class Demo03Component{
    myList = [100,200,300,400,500];
}