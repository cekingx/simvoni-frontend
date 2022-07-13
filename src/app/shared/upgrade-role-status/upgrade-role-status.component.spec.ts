import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeRoleStatusComponent } from './upgrade-role-status.component';

describe('UpgradeRoleStatusComponent', () => {
  let component: UpgradeRoleStatusComponent;
  let fixture: ComponentFixture<UpgradeRoleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeRoleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeRoleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
