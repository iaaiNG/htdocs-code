// a-service-http
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
    
    constructor(private http: Http) { }
    
    //向myUrl所对应的服务器发起请求
    sendRequest(myUrl:string){
        // a-http-get
        return this.http.get(myUrl)
            .map((response: Response) => response.json());
    }
}