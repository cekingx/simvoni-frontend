import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeightComponent } from './show-weight.component';

describe('ShowWeightComponent', () => {
  let component: ShowWeightComponent;
  let fixture: ComponentFixture<ShowWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
