import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpServicesComponent } from './erp-services.component';

describe('ErpServicesComponent', () => {
  let component: ErpServicesComponent;
  let fixture: ComponentFixture<ErpServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
