import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLengthComponent } from './full-length.component';

describe('FullLengthComponent', () => {
  let component: FullLengthComponent;
  let fixture: ComponentFixture<FullLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
