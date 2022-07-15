import { Component, OnInit } from '@angular/core';
import { CarDetailsDto } from 'src/app/models/dtos/carDetailsDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDetailsDtos: CarDetailsDto[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {

    this.getCarDetails();

  }

  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => { this.carDetailsDtos = response.data });
  }

}
