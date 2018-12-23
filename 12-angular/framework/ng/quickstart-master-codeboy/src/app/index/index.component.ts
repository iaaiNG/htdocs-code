import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyHttpService } from '../utility/service/myhttp.service';

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls: [ 
        './../../assets/css/animate.css',
        './../../assets/css/item_cat.css',
        './../../assets/css/slide.css',
    ]
})

export class IndexComponent implements OnInit {
    recommendedItems:Array<any> = []
    topSaleItems:Array<any> = []
    newArrivalItems:Array<any> = []
    constructor(private titleService: Title, private myHttp:MyHttpService) { }
    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 2000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];

    ngOnInit() {
        this.titleService.setTitle('首页 — 学子商城');
        this.initData()
    }
    initData(){
        this.myHttp.sendRequest('http://localhost/ajia_code/ajia_code/data/product/')
            .subscribe((data:any)=>{
                this.recommendedItems = data.recommendedItems
                this.topSaleItems = data.topSaleItems
                this.newArrivalItems = data.newArrivalItems
                for(let i of data.carouselItems){ 
                    this.slides.push({ image: i.img, text: i.title })
                }
            })
    }
}
