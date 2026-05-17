import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasComponent } from './roupas.component';

describe('RoupasComponent', () => {
  let component: RoupasComponent;
  let fixture: ComponentFixture<RoupasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoupasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoupasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
