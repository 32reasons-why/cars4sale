import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//compponents
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RemoveCarComponent } from './components/remove-car/remove-car.component';
import { ViewCarsComponent } from './components/view-cars/view-cars.component';

//create routes by objects {path and component}
const routes: Routes = [
  {
    path: "edit",
    component: EditCarComponent
  },
  {
    path: "add",
    component: AddCarComponent
  },
  {
    path: "remove",
    component: RemoveCarComponent
  },
  {
    path: "view",
    component: ViewCarsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
