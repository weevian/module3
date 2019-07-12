import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersavedPage } from './weathersaved.page';

describe('WeathersavedPage', () => {
  let component: WeathersavedPage;
  let fixture: ComponentFixture<WeathersavedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathersavedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathersavedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
