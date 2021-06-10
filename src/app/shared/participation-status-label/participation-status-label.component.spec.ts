import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationStatusLabelComponent } from './participation-status-label.component';

describe('ParticipationStatusLabelComponent', () => {
  let component: ParticipationStatusLabelComponent;
  let fixture: ComponentFixture<ParticipationStatusLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationStatusLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationStatusLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
