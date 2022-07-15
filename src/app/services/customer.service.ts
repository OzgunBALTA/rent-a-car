import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../models/constants/urls';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = BaseUrl + "api/Customers/";

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.url + "getall");
  }
}
