import { Component, OnInit } from '@angular/core';
import { RentalDetailsDto } from 'src/app/models/dtos/rentalDetailsDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetailsDtos: RentalDetailsDto[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe(response => { this.rentalDetailsDtos = response.data })
  }
}
