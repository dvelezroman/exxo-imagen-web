import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDoctorComponent } from './best-doctor.component';

describe('BestDoctorComponent', () => {
  let component: BestDoctorComponent;
  let fixture: ComponentFixture<BestDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
