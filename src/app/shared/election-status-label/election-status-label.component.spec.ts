import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionStatusLabelComponent } from './election-status-label.component';

describe('ElectionStatusLabelComponent', () => {
  let component: ElectionStatusLabelComponent;
  let fixture: ComponentFixture<ElectionStatusLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionStatusLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionStatusLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
