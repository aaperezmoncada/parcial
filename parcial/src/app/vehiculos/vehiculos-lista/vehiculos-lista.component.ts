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
  marcas = new Map()

  constructor(private vehiculosService: VehiculosService) { }

  getVehiculos() {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data
      this.getTotalizadorMarcas()
    })
  }

  getTotalizadorMarcas() {
    this.vehiculos.forEach(element => {
      let total = 0;
      if (this.marcas.has(element.marca)) {
        total = this.marcas.get(element.marca)
      }
      total += 1
      this.marcas.set(element.marca, total)
    });
  }

  ngOnInit(): void {
    this.getVehiculos()
  }

}
