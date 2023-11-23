import { Component, OnInit } from '@angular/core';
//import service 
import { CarsServiceService } from 'src/app/cars-service.service';


@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent implements OnInit{

  //array for data
  carsData: any = []
  //class constructor
  constructor(private car: CarsServiceService){}

  ngOnInit(): void {
    //call get..............use subscribe to cast a method thats called
    this.car.getAllCars().subscribe((cars)=>{
      //console.log(results)
      this.carsData = cars;
    });
  }
  
}
