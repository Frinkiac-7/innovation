import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdportalComponent } from './odportal.component';

describe('OdportalComponent', () => {
  let component: OdportalComponent;
  let fixture: ComponentFixture<OdportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
