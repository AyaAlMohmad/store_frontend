import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasComponent } from './villas.component';

describe('VillasComponent', () => {
  let component: VillasComponent;
  let fixture: ComponentFixture<VillasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillasComponent]
    });
    fixture = TestBed.createComponent(VillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
