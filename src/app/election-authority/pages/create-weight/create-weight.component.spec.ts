import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWeightComponent } from './create-weight.component';

describe('CreateWeightComponent', () => {
  let component: CreateWeightComponent;
  let fixture: ComponentFixture<CreateWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
