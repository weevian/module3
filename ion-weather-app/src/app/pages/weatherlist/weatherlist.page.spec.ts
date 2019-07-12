import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherlistPage } from './weatherlist.page';

describe('WeatherlistPage', () => {
  let component: WeatherlistPage;
  let fixture: ComponentFixture<WeatherlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
