import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderRequestComponent } from './finder-request.component';

describe('FinderRequestComponent', () => {
  let component: FinderRequestComponent;
  let fixture: ComponentFixture<FinderRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinderRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
