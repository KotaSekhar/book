import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraionformComponent } from './registraionform.component';

describe('RegistraionformComponent', () => {
  let component: RegistraionformComponent;
  let fixture: ComponentFixture<RegistraionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
