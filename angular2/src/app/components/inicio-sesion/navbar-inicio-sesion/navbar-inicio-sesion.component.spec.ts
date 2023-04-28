import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInicioSesionComponent } from './navbar-inicio-sesion.component';

describe('NavbarInicioSesionComponent', () => {
  let component: NavbarInicioSesionComponent;
  let fixture: ComponentFixture<NavbarInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInicioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
