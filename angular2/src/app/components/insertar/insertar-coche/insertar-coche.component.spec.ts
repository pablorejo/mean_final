import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCocheComponent } from './insertar-coche.component';

describe('InsertarCocheComponent', () => {
  let component: InsertarCocheComponent;
  let fixture: ComponentFixture<InsertarCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
