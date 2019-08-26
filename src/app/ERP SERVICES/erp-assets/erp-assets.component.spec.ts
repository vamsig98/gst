import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpAssetsComponent } from './erp-assets.component';

describe('ErpAssetsComponent', () => {
  let component: ErpAssetsComponent;
  let fixture: ComponentFixture<ErpAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
