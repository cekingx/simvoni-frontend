import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEaComponent } from './show-ea.component';

describe('ShowEaComponent', () => {
  let component: ShowEaComponent;
  let fixture: ComponentFixture<ShowEaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
