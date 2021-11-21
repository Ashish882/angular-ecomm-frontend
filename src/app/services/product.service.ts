import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import { serverResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts(limitOfResults=10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.SERVER_URL + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }


}
