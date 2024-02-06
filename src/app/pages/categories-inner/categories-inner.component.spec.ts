import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesInnerComponent } from './categories-inner.component';

describe('CategoriesInnerComponent', () => {
  let component: CategoriesInnerComponent;
  let fixture: ComponentFixture<CategoriesInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
