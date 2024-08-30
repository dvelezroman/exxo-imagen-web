import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarruselComponent } from './hero-carrusel.component';

describe('HeroCarruselComponent', () => {
  let component: HeroCarruselComponent;
  let fixture: ComponentFixture<HeroCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCarruselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
