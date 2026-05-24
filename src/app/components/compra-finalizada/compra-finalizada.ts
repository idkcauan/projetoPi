import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { CarrinhoItem } from '../../models/carrinho.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-compra-finalizada',
  imports: [CommonModule],
  templateUrl: './compra-finalizada.html',
  styleUrl: './compra-finalizada.css',
})
export class CompraFinalizada {

  constructor(private carrinhoService:CarrinhoService, private cd:ChangeDetectorRef, public usuarioService:UsuarioService){}

  carrinho:CarrinhoItem[] = [];
  total = 0;

  ngOnInit(){
    this.carrinhoService.listar().subscribe(dados => {
      this.carrinho = dados;
      

      this.total = this.carrinho.reduce((acc, item) =>
        acc + item.produto.preco * item.quantidade, 0
      );

      this.cd.detectChanges();

      this.carrinhoService.limparCarrinho();
    })
  }
}
