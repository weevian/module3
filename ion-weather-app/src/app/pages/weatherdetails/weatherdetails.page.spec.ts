import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdetailsPage } from './weatherdetails.page';

describe('WeatherdetailsPage', () => {
  let component: WeatherdetailsPage;
  let fixture: ComponentFixture<WeatherdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
