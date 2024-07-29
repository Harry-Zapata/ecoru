import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationLimitComponent } from './reservation-limit.component';

describe('ReservationLimitComponent', () => {
  let component: ReservationLimitComponent;
  let fixture: ComponentFixture<ReservationLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservationLimitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
