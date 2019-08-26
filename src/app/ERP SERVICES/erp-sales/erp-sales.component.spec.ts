import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSalesComponent } from './erp-sales.component';

describe('ErpSalesComponent', () => {
  let component: ErpSalesComponent;
  let fixture: ComponentFixture<ErpSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
