import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos-lista',
  templateUrl: './vehiculos-lista.component.html',
  styleUrls: ['./vehiculos-lista.component.css']
})
export class VehiculosListaComponent implements OnInit {

  vehiculos: Vehiculo[] = []

  constructor(private vehiculosService: VehiculosService) { }

  getVehiculos() {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data
    })
  }

  ngOnInit(): void {
    this.getVehiculos()
  }

}
