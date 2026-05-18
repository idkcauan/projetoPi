import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  listar():Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API);
  }

  buscarPorId(codigo: number|string):Observable<Produto|undefined>{
    return this.http.get<Produto>(this.API + `/${codigo}`)
  }

  adicionar(produto: Produto):Observable<Produto> {
    return this.http.post<Produto>(this.API, produto);
  }

  atualizar(produto: Produto): Observable<Produto>{
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produto>(url, produto);
  }

  excluir(id:number):Observable<Produto>{
    return this.http.delete<Produto>(this.API + `/${id}`);
  }
}
