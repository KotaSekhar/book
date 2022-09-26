import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyabookformComponent } from './buyabookform.component';

describe('BuyabookformComponent', () => {
  let component: BuyabookformComponent;
  let fixture: ComponentFixture<BuyabookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyabookformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyabookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
