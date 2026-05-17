import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  bannerImagem = 'images/banner-home.jpg';

  constructor(public usuarioService: UsuarioService, private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        const rota = event.urlAfterRedirects;

        if (rota.includes('volei')) {
          this.bannerImagem = 'images/banner-volei.png';
        }

        else if (rota.includes('corrida')) {
          this.bannerImagem = 'images/banner-corrida.png';
        }

        else if (rota.includes('suplementos')) {
          this.bannerImagem = 'images/banner-suplementos.png';
        }

        else if (rota.includes('basquete')) {
          this.bannerImagem = 'images/banner-basquete.png';
        }

        else if (rota.includes('calcados')) {
          this.bannerImagem = 'images/banner-calcados.png';
        }

        else {
          this.bannerImagem = 'images/banner-home.jpg';
        }

      });

  }

}
