import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableElectionComponent } from './available-election.component';

describe('AvailableElectionComponent', () => {
  let component: AvailableElectionComponent;
  let fixture: ComponentFixture<AvailableElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
