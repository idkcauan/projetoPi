import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleiComponent } from './volei.component';

describe('VoleiComponent', () => {
  let component: VoleiComponent;
  let fixture: ComponentFixture<VoleiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoleiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VoleiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
