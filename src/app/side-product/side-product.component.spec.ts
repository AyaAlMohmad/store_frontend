import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProductComponent } from './side-product.component';

describe('SideProductComponent', () => {
  let component: SideProductComponent;
  let fixture: ComponentFixture<SideProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideProductComponent]
    });
    fixture = TestBed.createComponent(SideProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
