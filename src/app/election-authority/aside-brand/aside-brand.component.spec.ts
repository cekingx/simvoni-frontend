import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBrandComponent } from './aside-brand.component';

describe('AsideBrandComponent', () => {
  let component: AsideBrandComponent;
  let fixture: ComponentFixture<AsideBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
