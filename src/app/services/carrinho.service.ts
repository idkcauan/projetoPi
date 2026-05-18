import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CarrinhoItem } from '../models/carrinho.model';
import { ProdutoService } from './produto.service';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {

    private carrinho :CarrinhoItem[] = []
    private API = "http://localhost:3000/carrinho"

  constructor(private http:HttpClient){}

    adicionarProduto(produto:Produto){
      
      this.http.get<CarrinhoItem[]>(this.API)
        .subscribe(carrinho => {
          const itemExistente = carrinho.find(
            item => item.produto.id == produto.id
          );

          if (itemExistente){
            itemExistente.quantidade++;

            this.http.put(
              `${this.API}/${itemExistente.id}`,
              itemExistente
            ).subscribe();
          }else{
            const novoItem: CarrinhoItem = {
              produto: produto,
              quantidade: 1
            }

            this.http.post<CarrinhoItem>(this.API, novoItem).subscribe();
          };
        }
          
        )}
      

    listar():Observable<CarrinhoItem[]>{
      return this.http.get<CarrinhoItem[]>(this.API);
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
