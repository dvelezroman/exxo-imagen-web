import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteOpinionComponent } from './paciente-opinion.component';

describe('PacienteOpinionComponent', () => {
  let component: PacienteOpinionComponent;
  let fixture: ComponentFixture<PacienteOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteOpinionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacienteOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
