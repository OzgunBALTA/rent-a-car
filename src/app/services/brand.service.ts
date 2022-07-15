import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListResponseModel } from '../models/results/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/entities/brand';
import { BaseUrl } from '../models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = BaseUrl + "api/Brands/"

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {

    return this.httpClient.get<ListResponseModel<Brand>>(this.url + "getall")

  }

}
