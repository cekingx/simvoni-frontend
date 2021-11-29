import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedElectionDetailComponent } from './ended-election-detail.component';

describe('EndedElectionDetailComponent', () => {
  let component: EndedElectionDetailComponent;
  let fixture: ComponentFixture<EndedElectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndedElectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndedElectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
