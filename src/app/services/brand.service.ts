import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ListResponseModel } from '../models/results/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/entities/brand';
import { apiUrl, BaseUrl } from '../models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPatch = BaseUrl + apiUrl + "Brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPatch);

  }

}
