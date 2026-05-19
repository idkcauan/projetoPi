import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { CarrinhoItem } from '../../models/carrinho.model';

@Component({
  selector: 'app-compra-finalizada',
  imports: [CommonModule],
  templateUrl: './compra-finalizada.html',
  styleUrl: './compra-finalizada.css',
})
export class CompraFinalizada {

  constructor(private carrinhoService:CarrinhoService){}

  carrinho:CarrinhoItem[] = [];
  total = 0;

  ngOnInit(){
    this.carrinhoService.listar().subscribe(dados => {
      this.carrinho = dados;

    this.total = this.carrinho.reduce((acc, item) =>
      acc + item.produto.preco * item.quantidade, 0
    );
    })
  }
}
