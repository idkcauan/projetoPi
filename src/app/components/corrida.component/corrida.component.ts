import { ChangeDetectorRef, Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { CarrinhoItem } from '../../models/carrinho.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corrida.component',
  imports: [CommonModule, RouterModule],
  templateUrl: './corrida.component.html',
  styleUrl: './corrida.component.css',
})
export class CorridaComponent {
  produtos: Produto[] = [];
  carrinho: CarrinhoItem[] = [];

  constructor(
    private produtoSe: ProdutoService, private carrinhoSe: CarrinhoService, private router: Router, private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.produtoSe.listar().subscribe(dados => {
      this.produtos = dados;
      this.cd.detectChanges();
    });
  }
}
