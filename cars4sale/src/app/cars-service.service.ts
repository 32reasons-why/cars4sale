import { Injectable } from '@angular/core';
//Https API
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  //database url resources-----------------------
  url  = 'http://localhost:3000/Cars';
  constructor(private http:HttpClient) { }
  ///--------------------------------------------

  //cru(D) display/get data----------------------
  getAllCars(){

    return  this.http.get(this.url);
  }
  //---------------------------------------------
}
