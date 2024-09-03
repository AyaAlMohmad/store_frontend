import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VilladetailsComponent } from './villadetails.component';

describe('VilladetailsComponent', () => {
  let component: VilladetailsComponent;
  let fixture: ComponentFixture<VilladetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VilladetailsComponent]
    });
    fixture = TestBed.createComponent(VilladetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
