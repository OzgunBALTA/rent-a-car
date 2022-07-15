import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../models/constants/urls';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url = BaseUrl + "api/Colors/";

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {

    return this.httpClient.get<ListResponseModel<Color>>(this.url + "getall");

  }
}
