import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker'

import { VehiculosListaComponent } from './vehiculos/vehiculos-lista/vehiculos-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from './vehiculos/vehiculo';
import { VehiculosService } from './vehiculos/vehiculos.service';


describe('VehiculosListaComponent', () => {
  let component: VehiculosListaComponent;
  let fixture: ComponentFixture<VehiculosListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculosListaComponent ],
      providers: [ VehiculosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListaComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.vehiculos.push(vehiculo)
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the corresponding src to the book image and alt to the book name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.vehiculos[i].imagen)

      expect(img.attributes['alt']).toEqual(
        component.vehiculos[i].color)

      expect(img.attributes['alt']).toEqual(
        component.vehiculos[i].linea)

      expect(img.attributes['alt']).toEqual(
        component.vehiculos[i].marca)

      expect(img.attributes['alt']).toEqual(
        component.vehiculos[i].referencia)

    })
  });

  it('should have h5 tag with the book.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.vehiculos[i].marca)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehiculos[i].color)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehiculos[i].linea)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehiculos[i].referencia)
    });
  });

  it('should have h5 tag with the book.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.vehiculos[i].kilometraje)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehiculos[i].modelo)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.vehiculos[i].imagen)
    });
  });

 });

