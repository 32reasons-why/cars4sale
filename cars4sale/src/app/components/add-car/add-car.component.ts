import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//servie
import { CarsServiceService } from 'src/app/cars-service.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{


  //property
  addCar = new FormGroup({
    make: new FormControl( '' ),
    model: new FormControl( '' ),
    year: new FormControl( '' ),
    spec: new FormControl( '' )
  })

  constructor(private car: CarsServiceService) {}


  ngOnInit(): void {
    
  }

  //savedata
  SaveData(){
    
    if(this.addCar == null){

      
    }else{
      this.car.addCarData(this.addCar.value).subscribe((result)=>{
        console.log('hi')
      })
    }
    
  }
    
}
