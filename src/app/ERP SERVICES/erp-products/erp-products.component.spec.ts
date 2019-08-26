import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpProductsComponent } from './erp-products.component';

describe('ErpProductsComponent', () => {
  let component: ErpProductsComponent;
  let fixture: ComponentFixture<ErpProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
