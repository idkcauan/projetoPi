import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login.component',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private usuarioSe: UsuarioService, private router: Router){}
  email:string = ''
  senha:string = ''

  realizarLogin(){
    const usuario = {
      nome:"",
      email:this.email,
      senha:this.senha
    }

    if(!this.email.trim()||!this.senha.trim()){
      alert("Preencha todos os campos!")
      return;
    }

    const sucesso = this.usuarioSe.validarLogin(usuario);

    if(sucesso){
      alert("Bem vindo!");
      this.router.navigate(['/'])
    }else{
      alert("Usuario não encontrado")
    }

  }
}
