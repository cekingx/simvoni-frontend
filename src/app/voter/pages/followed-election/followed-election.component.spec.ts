import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedElectionComponent } from './followed-election.component';

describe('FollowedElectionComponent', () => {
  let component: FollowedElectionComponent;
  let fixture: ComponentFixture<FollowedElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
