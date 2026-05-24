import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { CarrinhoItem } from '../../models/carrinho.model';

@Component({
  selector: 'app-carrinho-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './carrinho-page.html',
  styleUrl: './carrinho-page.css',
})
export class CarrinhoPage {

  carrinho:CarrinhoItem[] = [];
  total = 0;
  constructor(private router:Router, private carrinhoService:CarrinhoService, private cd: ChangeDetectorRef){}

  ngOnInit(){
    this.carrinhoService.listar().subscribe(dados => {
      this.carrinho = dados;
      

      this.total = this.carrinho.reduce((acc, item) =>
        acc + item.produto.preco * item.quantidade, 0
      );

      this.cd.detectChanges();
    });
  }

  checarCarrinho(){
    if(this.carrinho.length <= 0){
      alert("O carrinho está vazio!")
    }else{
      this.router.navigate(['/finalizado'])
    }
  }
}
