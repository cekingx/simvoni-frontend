import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedElectionDetailComponent } from './followed-election-detail.component';

describe('FollowedElectionDetailComponent', () => {
  let component: FollowedElectionDetailComponent;
  let fixture: ComponentFixture<FollowedElectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedElectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedElectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
