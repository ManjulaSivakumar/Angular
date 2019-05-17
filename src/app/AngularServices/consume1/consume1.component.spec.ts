import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consume1Component } from './consume1.component';

describe('Consume1Component', () => {
  let component: Consume1Component;
  let fixture: ComponentFixture<Consume1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consume1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consume1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
