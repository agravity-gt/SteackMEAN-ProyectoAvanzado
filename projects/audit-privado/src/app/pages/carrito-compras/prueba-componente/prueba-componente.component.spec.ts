import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponenteComponent } from './prueba-componente.component';

describe('PruebaComponenteComponent', () => {
  let component: PruebaComponenteComponent;
  let fixture: ComponentFixture<PruebaComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaComponenteComponent]
    });
    fixture = TestBed.createComponent(PruebaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
