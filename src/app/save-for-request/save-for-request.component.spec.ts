import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveForRequestComponent } from './save-for-request.component';

describe('SaveForRequestComponent', () => {
  let component: SaveForRequestComponent;
  let fixture: ComponentFixture<SaveForRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveForRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveForRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
