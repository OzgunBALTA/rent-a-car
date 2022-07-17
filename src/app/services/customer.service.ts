import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl, BaseUrl } from '../models/constants/urls';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPatch = BaseUrl + apiUrl + "Customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPatch);
  }
}
