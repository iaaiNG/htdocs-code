import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../service/myhttp.service'

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
    kw:string = ""
    isUserLogin:boolean = false;
    uName:string
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() {
        this.checkUserLoginn()
     }
    checkUserLoginn(){
        this.myHttp.sendRequest('http://localhost/ajia_code/ajia_code/data/user/session_data.php')
            .subscribe((data:any)=>{
                this.isUserLogin = data.uid ? true : false
                this.uName = data.uname
            })
    }
    logout(){
        this.myHttp.sendRequest('http://localhost/ajia_code/ajia_code/data/user/logout.php')
            .subscribe((data:any)=>{
                this.isUserLogin = data.code == 200 ? false : true
                this.uName = ''
            })
    }
}