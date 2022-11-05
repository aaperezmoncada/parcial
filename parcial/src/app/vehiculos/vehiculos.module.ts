import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListaComponent } from './vehiculos-lista/vehiculos-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    VehiculosListaComponent
  ],
  declarations: [VehiculosListaComponent]
})
export class VehiculosModule { }
