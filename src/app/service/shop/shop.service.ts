import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

const BASE_URL = "http://127.0.0.1:8000/"

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) {}
   
  getCollection(endpoint: string): Observable<any> {
    const url = `${BASE_URL}/${endpoint}`;
    return this.http.get(url);
  }

  getProducts(endpoint:string):Observable<any>{
    const url = `${BASE_URL}/${endpoint}`;
    return this.http.get(url);
  }
}