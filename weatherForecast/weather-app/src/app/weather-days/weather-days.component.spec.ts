import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDaysComponent } from './weather-days.component';

describe('WeatherDaysComponent', () => {
  let component: WeatherDaysComponent;
  let fixture: ComponentFixture<WeatherDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
