import { Directive ,Input,ElementRef,OnInit} from '@angular/core';

@Directive({ selector: '[changbg]' })
export class ChangeBgDirective implements OnInit {
    @Input() changbg:string;
    constructor(private myElRef:ElementRef) {
        console.log('在自定义指令的构造函数');
     }

    //指令类初始化完成之后，修改调用指令的元素的
    //背景色为传递来的值
    ngOnInit(){
        //找到调用指令的元素
        var element = this.myElRef.nativeElement;
        //设置背景色
        element.style.backgroundColor = this.changbg;
    }
}