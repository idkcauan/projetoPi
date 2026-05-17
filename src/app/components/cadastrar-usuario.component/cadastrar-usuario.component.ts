import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario.component',
  imports: [RouterModule, FormsModule],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.css',
})
export class CadastrarUsuarioComponent {
  constructor(private usuarioSe:UsuarioService, private router:Router){}
  nome:string = '';
  email:string = '';
  senha:string = '';
  senha2: string = '';

  cadastroDeUsuario(){
    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    }

    if(!this.nome.trim()||!this.email.trim()||!this.senha.trim()){
      alert("Preencha todos os campos!")
      return;
    }

    const sucesso:boolean = this.usuarioSe.cadastrarUsuario(usuario, this.senha, this.senha2);

    if(sucesso){
      alert("Usuario cadastrado com sucesso!")
      this.router.navigate(['/login'])
    }else{
      alert("Erro ao cadastrar usuário...")
    }
  }
}
