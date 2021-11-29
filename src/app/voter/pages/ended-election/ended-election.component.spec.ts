import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedElectionComponent } from './ended-election.component';

describe('EndedElectionComponent', () => {
  let component: EndedElectionComponent;
  let fixture: ComponentFixture<EndedElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndedElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndedElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
