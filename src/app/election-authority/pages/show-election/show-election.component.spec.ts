import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowElectionComponent } from './show-election.component';

describe('ShowElectionComponent', () => {
  let component: ShowElectionComponent;
  let fixture: ComponentFixture<ShowElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
