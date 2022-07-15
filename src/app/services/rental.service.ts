import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../models/constants/urls';
import { RentalDetailsDto } from '../models/dtos/rentalDetailsDto';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = BaseUrl + "api/Rentals/"

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(this.url + "getall");
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDetailsDto>> {
    return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(this.url + "getrentaldetails");
  }
}
