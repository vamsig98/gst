import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpExpensesComponent } from './erp-expenses.component';

describe('ErpExpensesComponent', () => {
  let component: ErpExpensesComponent;
  let fixture: ComponentFixture<ErpExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
