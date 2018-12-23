import { Component, OnInit,ViewChild } from '@angular/core';

//可以通过ViewChild得到本地变量所对应的子组件实例

@Component({
    selector: 'myindex',
    template: `
        <h1>这是首页</h1>
        <button
        (click)="handleClick(productSlides)">
            获取子组件中轮播图的数量
        </button>
        <h3>{{count}}</h3>
        <h4>{{productSlides.slideCount}}</h4>
        <hr/>
        <myslides #productSlides></myslides>
    `
})
export class MyIndexComponent implements OnInit {
    //通过ViewChidl去查看本地变量为productSlides的
    //组件实例，并赋值给sonInstance

    @ViewChild('productSlides') sonInstance:any;

    //保存的是子组件中轮播图的数量
    count:number = 0;
    constructor() { }
    ngOnInit() {
        //打印sonInstance
        console.log(this.sonInstance);
     }

    //按钮单击处理函数，在按钮单击时 
    //能够得到子组件的实例
    handleClick(data:any){
        console.log(data);
        // data.slideCount就是子组件实例中的值
        this.count = data.slideCount;
    }
}