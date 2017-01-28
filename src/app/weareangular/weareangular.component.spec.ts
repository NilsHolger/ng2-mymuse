/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeareangularComponent } from './weareangular.component';

describe('WeareangularComponent', () => {
  let component: WeareangularComponent;
  let fixture: ComponentFixture<WeareangularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeareangularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeareangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
