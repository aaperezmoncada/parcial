import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosListaComponent } from './vehiculos-lista.component';

describe('VehiculosListaComponent', () => {
  let component: VehiculosListaComponent;
  let fixture: ComponentFixture<VehiculosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculosListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
