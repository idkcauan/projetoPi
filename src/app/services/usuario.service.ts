import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarios:Usuario[] = [
    {nome:"admin", email:"admin@gmail.com", senha:"1234", cargo:"admin"},
    {nome:"Hugo", email:"hugo@gmail.com", senha:"9999"}
  ]

  usuarioLogado:Usuario | null = null;
  private API = "http://localhost:3000/usuarios";

  constructor(private http:HttpClient){}

  validarLogin(usuario:Usuario): boolean{
    const usuarioE = this.usuarios.find(u => u.email === usuario.email && u.senha === usuario.senha);

    if(usuarioE){
      this.usuarioLogado = usuarioE;
      localStorage.setItem('usuario', JSON.stringify(usuarioE));

      return true;
    }
    return false;
  }

  getUsuarioLogado(): Usuario | null {
    if(this.usuarioLogado){
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
