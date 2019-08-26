import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpProfitLossComponent } from './erp-profit-loss.component';

describe('ErpProfitLossComponent', () => {
  let component: ErpProfitLossComponent;
  let fixture: ComponentFixture<ErpProfitLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpProfitLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpProfitLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
