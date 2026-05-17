import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CarrinhoItem } from '../models/carrinho.model';
import { ProdutoService } from './produto.service';
import { Produto } from '../models/produto.model';
import { count } from 'console';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {

    private carrinho :CarrinhoItem[] = []

    adicionarProduto(produto:Produto){
      
      const item = this.carrinho.find(prod => prod.produto.id === produto.id);

      if(item){
        item.quantidade++;
        console.log("Quantidade de itens aumentada")

      }else{
        this.carrinho.push({produto:produto, quantidade:1});
        console.log("Produto adicionado")
      }
    }

    listar():CarrinhoItem[]{
      return this.carrinho;
    }

    calcularPreco(carrinho:CarrinhoItem[]):number{
      let total:number = 0;
      for(let i:number = 0;i<carrinho.length;i++){
        let preco = (carrinho[i].produto.preco * carrinho[i].quantidade)
        total += preco;
      }

      return total;
    }
}
