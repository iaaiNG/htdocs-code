import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyHttpService } from '../utility/service/myhttp.service';
import { Router } from '@angular/router';

@Component({
    selector: 'storeLogin',
    templateUrl: './login.component.html',
    styleUrls: [ './../../assets/css/login.css']
})

export class LoginComponent implements OnInit {
    uName:string = ''
    uPwd:string = ''
    constructor(private titleService: Title, private myHttp:MyHttpService, private myRouter:Router) { }

    ngOnInit() {
        this.titleService.setTitle('登录 — 学子商城');
    }
    login(){
        this.myHttp.sendRequest(
        `http://localhost/ajia_code/ajia_code/data/user/login.php?uname=${this.uName}&upwd=${this.uPwd}`)
        .subscribe((data:any)=>{
            
            if(data.code == 200) this.myRouter.navigate(['/index'])
            else alert("密码或用户名有误，请重新输入！")
        })
    }
}
