import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[test]' })

export class TestDirective implements OnInit {
    constructor(private el:ElementRef) {
    }
    ngOnInit() { 
        console.log(this.el)
        this.el.nativeElement.style.color = "gray"
    }
}