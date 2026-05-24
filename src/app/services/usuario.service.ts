import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioLogado:Usuario | null = null;
  private API = "http://localhost:3000/usuarios";

  constructor(private http:HttpClient){}

  getUsuarioLogado(): Usuario | null {
    if(!this.usuarioLogado){
      const user = localStorage.getItem('usuario');
      if(user){
        this.usuarioLogado = JSON.parse(user);
      }
    }
    return this.usuarioLogado;
  }

  isLogado(): boolean {
    return !!this.getUsuarioLogado();
  }

  cadastrarUsuario(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario);
  }

  listar():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API);
  }

  isAdmin(): boolean {
  return this.getUsuarioLogado()?.cargo === 'admin';
  }
  
}
