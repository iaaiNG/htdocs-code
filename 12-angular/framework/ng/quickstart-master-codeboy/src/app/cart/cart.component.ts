import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/myhttp.service';

@Component({
    selector: 'storeCart',
    templateUrl: './cart.component.html',
    styleUrls: [ './../../assets/css/cart.css' ]
})

export class CartComponent implements OnInit {
    list:Array<any> = []
    totalPrice:number = 0
    constructor(private myHttp: MyHttpService) { }

    ngOnInit() {
        this.cartView()
     }
    cartView(){
        this.myHttp.sendRequest(`http://localhost/ajia_code/ajia_code/data/cart/list.php`).subscribe((data:any)=>{
            this.list = data.data
            this.totalPrice = 0
            for(let i of this.list){this.totalPrice += i.count*i.price}
            console.log(data)
        }) 
    }
    updateCount(tar:any,cid:number,action:number,tar2:any,){
        var danjia = tar2.innerHTML/tar.value
        this.myHttp.sendRequest(
        `http://localhost/ajia_code/ajia_code/data/cart/update_count.php?cid=${cid}&count=${action+parseInt(tar.value)}`)
        .subscribe((data:any)=>{
            if(data.code == 200){
                this.totalPrice += danjia*action
                tar.value = parseInt(tar.value)+action
                tar2.innerHTML = danjia*tar.value 
            }
        }) 
    }
}