import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowAdminLoginsComponent } from './row-admin-logins.component';

describe('RowAdminLoginsComponent', () => {
  let component: RowAdminLoginsComponent;
  let fixture: ComponentFixture<RowAdminLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowAdminLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowAdminLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
