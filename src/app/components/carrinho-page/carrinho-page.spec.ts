import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoPage } from './carrinho-page';

describe('CarrinhoPage', () => {
  let component: CarrinhoPage;
  let fixture: ComponentFixture<CarrinhoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrinhoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrinhoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
