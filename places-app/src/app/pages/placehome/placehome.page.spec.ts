import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacehomePage } from './placehome.page';

describe('PlacehomePage', () => {
  let component: PlacehomePage;
  let fixture: ComponentFixture<PlacehomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacehomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacehomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
