import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl, BaseUrl } from '../models/constants/urls';
import { CarDetailsDto } from '../models/dtos/carDetailsDto';
import { Car } from '../models/entities/car';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPatch = BaseUrl + apiUrl + "Cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPatch);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailsDto>> {
    let newPatch = BaseUrl + apiUrl + "Cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPatch);
  }

  getCarDetailsById(id: Number): Observable<ListResponseModel<CarDetailsDto>> {
    let newPath = BaseUrl + apiUrl + "Cars/getcardetailsbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }

  getCarDetailsByBrand(brandId: number): Observable<ListResponseModel<CarDetailsDto>> {
    let newPatch = BaseUrl + apiUrl + "Cars/getcardetailsbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPatch);
  }

  getCarDetailsByColor(colorId: number): Observable<ListResponseModel<CarDetailsDto>> {
    let newPatch = BaseUrl + apiUrl + "Cars/getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPatch);
  }

  getCarDetailsByBrandAndColor(brandId: number, colorId: number): Observable<ListResponseModel<CarDetailsDto>> {
    let newPatch = BaseUrl + apiUrl + "Cars/getcardetailsbybrandidandcolorid?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPatch);
  }

}
