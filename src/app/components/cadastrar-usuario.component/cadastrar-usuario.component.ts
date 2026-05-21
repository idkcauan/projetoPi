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
    if(this.senha != this.senha2){
      alert("As senhas não são iguais.")
      return;
    }
    
    this.usuarioSe.listar()
      .subscribe(usuarios => {
        const emailExistente = usuarios.find(
          u => u.email == this.email
        );

        if(emailExistente){
          alert("email já cadastrado");
          return
        }

        const novoUsuario = {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        };

        this.usuarioSe.cadastrarUsuario(novoUsuario)
          .subscribe(() => {});

        this.nome = "";
        this.email = "";
        this.senha = "";
        this.senha2 = "";

        this.router.navigate(['/login'])
      });
  }
}
