import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraFinalizada } from './compra-finalizada';

describe('CompraFinalizada', () => {
  let component: CompraFinalizada;
  let fixture: ComponentFixture<CompraFinalizada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraFinalizada],
    }).compileComponents();

    fixture = TestBed.createComponent(CompraFinalizada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
