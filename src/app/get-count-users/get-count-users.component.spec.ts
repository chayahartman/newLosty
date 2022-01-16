import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCountUsersComponent } from './get-count-users.component';

describe('GetCountUsersComponent', () => {
  let component: GetCountUsersComponent;
  let fixture: ComponentFixture<GetCountUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCountUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCountUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
