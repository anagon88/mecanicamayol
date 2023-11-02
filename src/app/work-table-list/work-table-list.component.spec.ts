import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTableListComponent } from './work-table-list.component';

describe('TableListComponent', () => {
  let component: WorkTableListComponent;
  let fixture: ComponentFixture<WorkTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
