import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/myhttp.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'storeList',
    templateUrl: './list.component.html',
    styleUrls: ['../../../assets/css/products.css']

})

export class ListComponent implements OnInit {
    data: Array<any> = []
    pageCount: Array<any> = []
    currentPage: number = 1
    productCount:number = 1
    list:Array<any> = []
    totalPrice:number = 0
    constructor(private myHttp: MyHttpService, private myRoute: ActivatedRoute) { }

    ngOnInit() {
        this.cartView()
        this.initData(this.currentPage)
    }
    initData(pno: number) {
        this.myRoute.params.subscribe((data: any) => {
            this.myHttp.sendRequest(`http://localhost/ajia_code/ajia_code/data/product/list.php?pno=${pno}&kw=${data.kw}`)
            .subscribe((data: any) => {
                // console.log(data)
                this.currentPage = pno
                this.data = data.data
                this.pageCount.length = data.pageCount
            })
        })
    }
    reduceProduct(data:any){ data.value>1 && data.value-- }
    addProduct(data:any){ data.value++ }
    addToCart(data1:any,data2:any){
        this.myHttp.sendRequest(`http://localhost/ajia_code/ajia_code/data/cart/add.php?lid=${data1}&buyCount=${data2}`)
        .subscribe(()=>{
            this.cartView()
        })
        
    }
    cartView(){
        this.myHttp.sendRequest(`http://localhost/ajia_code/ajia_code/data/cart/list.php`).subscribe((data:any)=>{
            this.list = data.data
            this.totalPrice = 0
            for(let i of this.list){this.totalPrice += i.count*i.price}
        }) 
    }
}