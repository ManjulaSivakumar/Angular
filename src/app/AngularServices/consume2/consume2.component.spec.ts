import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consume2Component } from './consume2.component';

describe('Consume2Component', () => {
  let component: Consume2Component;
  let fixture: ComponentFixture<Consume2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consume2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consume2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
