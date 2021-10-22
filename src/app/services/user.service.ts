import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from "rxjs";
import { User } from "../models/user";
import {GLOBAL} from './global';
import { RegistroComponent } from '../registro/registro.component';

@Injectable()
export class UserService{

    public url:string;


    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(user: User): Observable <any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('content type', 'application/json');

       return this._http.post(this.url+'register', params, {headers:headers})
    }
}
