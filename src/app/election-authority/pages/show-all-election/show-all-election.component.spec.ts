import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllElectionComponent } from './show-all-election.component';

describe('ShowAllElectionComponent', () => {
  let component: ShowAllElectionComponent;
  let fixture: ComponentFixture<ShowAllElectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllElectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
