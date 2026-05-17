import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasqueteComponent } from './basquete.component';

describe('BasqueteComponent', () => {
  let component: BasqueteComponent;
  let fixture: ComponentFixture<BasqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasqueteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasqueteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
