import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListaComponent } from './vehiculos-lista/vehiculos-lista.component';

@NgModule({
  declarations: [
    VehiculosListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VehiculosListaComponent
  ]
})
export class VehiculosModule { }
