import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl, BaseUrl } from '../models/constants/urls';
import { RentalDetailsDto } from '../models/dtos/rentalDetailsDto';
import { Rental } from '../models/entities/rental';
import { ListResponseModel } from '../models/results/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPatch = BaseUrl + apiUrl + "Rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPatch);
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDetailsDto>> {
    let newPatch = BaseUrl + apiUrl + "Rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(newPatch);
  }
}
