import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeRoleComponent } from './upgrade-role.component';

describe('UpgradeRoleComponent', () => {
  let component: UpgradeRoleComponent;
  let fixture: ComponentFixture<UpgradeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
