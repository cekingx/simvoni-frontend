import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParticipantComponent } from './show-participant.component';

describe('ShowParticipantComponent', () => {
  let component: ShowParticipantComponent;
  let fixture: ComponentFixture<ShowParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
