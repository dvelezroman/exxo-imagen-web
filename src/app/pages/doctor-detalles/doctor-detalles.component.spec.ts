import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetallesComponent } from './doctor-detalles.component';

describe('DoctorDetallesComponent', () => {
  let component: DoctorDetallesComponent;
  let fixture: ComponentFixture<DoctorDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
