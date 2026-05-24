import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque implements OnInit {

  produtos: Produto[] = [];
  novoProduto: Produto = {} as Produto;
  produtoEditando?: Produto;

  categorias = ['Tênis', 'camisa', 'Vôlei', 'Basquete', 'Suplemento', 'Acessórios'];

  constructor(private produtoService: ProdutoService, private router: Router, private cd:ChangeDetectorRef) {}

  ngOnInit() {
    this.produtoService.listar().subscribe((data) => {
      this.produtos = data;
      this.cd.detectChanges();
    });
  }

    criarProdutoVazio(): Produto {
    return {
      id: 0,
      nome: '',
      categoria: '',
      preco: 0,
      quantidade: 0,
      imagem: "images/",
      codigo: 0
    };
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe((data) => {
      this.produtos = data;
    });
  }

  adicionarProduto() {
    this.produtoService.adicionar(this.novoProduto).subscribe(() => {
      this.novoProduto = {} as Produto;
      window.location.reload();
    });
  }

  editarProduto(produto: Produto) {
    this.produtoEditando = { ...produto };
  }

  salvarEdicao() {
    if (!this.produtoEditando) return;

    this.produtoService.atualizar(this.produtoEditando).subscribe(() => {
      this.produtoEditando = undefined;
      window.location.reload();
    });
  }

  cancelarEdicao() {
    this.produtoEditando = undefined;
  }

  excluirProduto(id: number) {
    if(id){
      this.produtoService.excluir(id).subscribe(() => {
        window.location.reload();
      })
    }
  }
}
