import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserRequestComponent } from './loser-request.component';

describe('LoserRequestComponent', () => {
  let component: LoserRequestComponent;
  let fixture: ComponentFixture<LoserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoserRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
