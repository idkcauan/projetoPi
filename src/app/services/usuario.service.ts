import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarios:Usuario[] = [
    {nome:"admin", email:"admin@gmail.com", senha:"1234", cargo:"admin"},
    {nome:"Hugo", email:"hugo@gmail.com", senha:"9999"}
  ]

  usuarioLogado:Usuario | null = null;

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

  cadastrarUsuario(usuario:Usuario, senha1:string, senha2:string): boolean{
    const usuarioE = this.usuarios.find(u => u.email === usuario.email)

    if(usuarioE){
      alert("email já cadastrado")
      return false;
    }
    if(senha1 != senha2){
      alert("As senhas não são iguais")
      return false;
    }

    usuario.cargo = 'user';

    this.usuarios.push(usuario);
    return true
  }

  isAdmin(): boolean {
  return this.getUsuarioLogado()?.cargo === 'admin';
  }
  
}
