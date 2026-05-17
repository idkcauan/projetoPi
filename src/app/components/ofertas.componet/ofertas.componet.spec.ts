import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasComponet } from './ofertas.componet';

describe('OfertasComponet', () => {
  let component: OfertasComponet;
  let fixture: ComponentFixture<OfertasComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertasComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(OfertasComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
