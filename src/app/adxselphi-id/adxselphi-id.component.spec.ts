import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADXSelphiIdComponent } from './adxselphi-id.component';

describe('ADXSelphiIdComponent', () => {
  let component: ADXSelphiIdComponent;
  let fixture: ComponentFixture<ADXSelphiIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADXSelphiIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADXSelphiIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
