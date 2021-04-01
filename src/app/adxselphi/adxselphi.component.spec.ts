import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADXSelphiComponent } from './adxselphi.component';

describe('ADXSelphiComponent', () => {
  let component: ADXSelphiComponent;
  let fixture: ComponentFixture<ADXSelphiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADXSelphiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADXSelphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
