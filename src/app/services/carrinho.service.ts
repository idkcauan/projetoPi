import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { CarrinhoItem } from '../models/carrinho.model';
import { ProdutoService } from './produto.service';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root',
})

export class CarrinhoService {
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
}
