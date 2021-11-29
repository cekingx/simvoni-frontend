import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEaComponent } from './show-all-ea.component';

describe('ShowAllEaComponent', () => {
  let component: ShowAllEaComponent;
  let fixture: ComponentFixture<ShowAllEaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllEaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
