import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({ selector: '[test]' })
export class TestDirective implements OnInit {
    // private public protected
    constructor(private el:ElementRef) { 
        console.log(
            'custom directive is called');
    }

    // 自定义指令多数情况下都是
    //针对调用该指令的元素进行某种操作
    ngOnInit(){
        console.log('in onInit lifecycle hook');
        
        this.el.nativeElement
            .style.visibility = "hidden";
    }
}