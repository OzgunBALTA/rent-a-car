import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../models/constants/urls';
import { CarDetailsDto } from '../models/dtos/carDetailsDto';
import { Car } from '../models/entities/car';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = BaseUrl + "api/Cars/"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.url + "getall");
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailsDto>> {
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(this.url + "getcardetails");
  }

}
