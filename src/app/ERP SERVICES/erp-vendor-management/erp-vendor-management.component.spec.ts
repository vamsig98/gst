import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpVendorManagementComponent } from './erp-vendor-management.component';

describe('ErpVendorManagementComponent', () => {
  let component: ErpVendorManagementComponent;
  let fixture: ComponentFixture<ErpVendorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpVendorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpVendorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
