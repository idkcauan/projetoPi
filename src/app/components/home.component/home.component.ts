import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { CarrinhoItem } from '../../models/carrinho.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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