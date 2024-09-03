import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProductComponent } from './header-product.component';

describe('HeaderProductComponent', () => {
  let component: HeaderProductComponent;
  let fixture: ComponentFixture<HeaderProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderProductComponent]
    });
    fixture = TestBed.createComponent(HeaderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
