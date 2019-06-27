import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMallsComponent } from './my-malls.component';

describe('MyMallsComponent', () => {
  let component: MyMallsComponent;
  let fixture: ComponentFixture<MyMallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
