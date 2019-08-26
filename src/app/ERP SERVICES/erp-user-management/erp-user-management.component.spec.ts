import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpUserManagementComponent } from './erp-user-management.component';

describe('ErpUserManagementComponent', () => {
  let component: ErpUserManagementComponent;
  let fixture: ComponentFixture<ErpUserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpUserManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
