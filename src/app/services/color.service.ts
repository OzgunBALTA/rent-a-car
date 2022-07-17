import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl, BaseUrl } from '../models/constants/urls';
import { Color } from '../models/entities/color';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPatch = BaseUrl + apiUrl + "Colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPatch);

  }
}
