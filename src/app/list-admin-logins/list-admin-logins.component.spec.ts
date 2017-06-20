import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdminLoginsComponent } from './list-admin-logins.component';

describe('ListAdminLoginsComponent', () => {
  let component: ListAdminLoginsComponent;
  let fixture: ComponentFixture<ListAdminLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdminLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdminLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
