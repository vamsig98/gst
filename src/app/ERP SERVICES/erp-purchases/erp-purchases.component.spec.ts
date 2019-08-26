import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpPurchasesComponent } from './erp-purchases.component';

describe('ErpPurchasesComponent', () => {
  let component: ErpPurchasesComponent;
  let fixture: ComponentFixture<ErpPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
