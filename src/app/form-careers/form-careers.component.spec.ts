import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCareersComponent } from './form-careers.component';

describe('FormCareersComponent', () => {
  let component: FormCareersComponent;
  let fixture: ComponentFixture<FormCareersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCareersComponent]
    });
    fixture = TestBed.createComponent(FormCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
