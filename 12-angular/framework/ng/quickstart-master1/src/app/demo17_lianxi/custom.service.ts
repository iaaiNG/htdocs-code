import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CheckLoginService {
    constructor(private http: Http) { }
    sendRequest(myUrl:string){
        return this.http.get(myUrl)
            .map((response:Response)=>response.json())
    }
}