/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForyouComponent } from './foryou.component';

describe('ForyouComponent', () => {
  let component: ForyouComponent;
  let fixture: ComponentFixture<ForyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
