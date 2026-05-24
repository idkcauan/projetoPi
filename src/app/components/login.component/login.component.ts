import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import { log } from 'node:console';

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
    this.usuarioSe.listar()
      .subscribe(usuarios => {
        const login = usuarios.find(
          u => u.email == this.email && u.senha == this.senha
        );

        if(login){
          this.usuarioSe.usuarioLogado = login;
          alert("Bem-vindo!")
          this.router.navigate(['/home'])
        }
      })

  }
}
