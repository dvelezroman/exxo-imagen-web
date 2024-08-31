import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetallesComponent } from './blog-detalles.component';

describe('BlogDetallesComponent', () => {
  let component: BlogDetallesComponent;
  let fixture: ComponentFixture<BlogDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
