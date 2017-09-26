import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCountComponent } from './employe-count.component';

describe('EmployeCountComponent', () => {
  let component: EmployeCountComponent;
  let fixture: ComponentFixture<EmployeCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
