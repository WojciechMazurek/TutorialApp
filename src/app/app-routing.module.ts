import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AddCompComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
