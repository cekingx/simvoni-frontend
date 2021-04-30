import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRtdElectionComponent } from './show-rtd-election.component';

describe('ShowRtdElectionComponent', () => {
  let component: ShowRtdElectionComponent;
  let fixture: ComponentFixture<ShowRtdElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRtdElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRtdElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
