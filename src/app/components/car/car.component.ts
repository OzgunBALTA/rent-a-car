import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/dtos/carDetailsDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailsDtos: CarDetailsDto[];

  constructor(private carService: CarService, private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getCarDetailsById(params["id"]);
      }
      else if (params["brandId"]) {
        this.getCarDetailsByBrand(params["brandId"]);
      }

      else if (params["colorId"]) {
        this.getCarDetailsByColor(params["colorId"]);
      }

      else if (params["brandId"] && params["colorId"]) {
        this.getCarDetailsByBrandAndColor(params["brandId"], params["colorId"]);
      }

      else {
        this.getCarDetails();
      }
    })

  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => { this.carDetailsDtos = response.data });
  }

  getCarDetailsById(id: number) {
    this.carService.getCarDetailsByBrand;
  }

  getCarDetailsByBrand(brandId: number) {
    this.carService.getCarDetailsByBrand(brandId).subscribe(response => { this.carDetailsDtos = response.data });
  }

  getCarDetailsByColor(colorId: number) {
    this.carService.getCarDetailsByColor(colorId).subscribe(response => this.carDetailsDtos = response.data);
  }

  getCarDetailsByBrandAndColor(brandId: number, colorId: number) {
    this.carService.getCarDetailsByBrandAndColor(brandId, colorId).subscribe(response => this.carDetailsDtos = response.data);
  }
}
