import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { CarrinhoItem } from '../../models/carrinho.model';
import { ProdutoService } from '../../services/produto.service';
import { CarrinhoService } from '../../services/carrinho.service';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class ProdutoPage {
  private API = "http://localhost:3000/produtos"
  produto?: Produto;

  constructor(private route: ActivatedRoute,
     private produtoService: ProdutoService, 
     private carrinhoService: CarrinhoService, 
     private cd:ChangeDetectorRef, 
     private router:Router,
     public usuarioService:UsuarioService
    ){}

  ngOnInit():void {
    const id = this.route.snapshot.params['id'];

    console.log(id);

    this.produtoService.buscarPorId(id)
      .subscribe(produto => {

        console.log(produto);

        this.produto = produto;
        this.cd.detectChanges();
      })
  }

  adicionarAoCarrinho(produto:Produto){
    this.carrinhoService.adicionarProduto(produto);
    console.log(this.carrinhoService.listar());
  }

  comprar(produto:Produto){
    this.carrinhoService.adicionarProduto(produto);
    
    setTimeout(() =>{
      this.router.navigate(['/carrinho']);
    }, 100)
  }
}
