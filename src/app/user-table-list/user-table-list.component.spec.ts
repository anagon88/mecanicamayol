import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableListComponent } from './user-table-list.component';

describe('TableListComponent', () => {
  let component: UserTableListComponent;
  let fixture: ComponentFixture<UserTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
