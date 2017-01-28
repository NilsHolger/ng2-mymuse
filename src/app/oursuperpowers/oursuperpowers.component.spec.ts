/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OursuperpowersComponent } from './oursuperpowers.component';

describe('OursuperpowersComponent', () => {
  let component: OursuperpowersComponent;
  let fixture: ComponentFixture<OursuperpowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OursuperpowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OursuperpowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
