import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSection2Component } from './about-section2.component';

describe('AboutSection2Component', () => {
  let component: AboutSection2Component;
  let fixture: ComponentFixture<AboutSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
