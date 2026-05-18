import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { CarrinhoItem } from '../../models/carrinho.model';

@Component({
  selector: 'app-carrinho-page',
  imports: [CommonModule],
  templateUrl: './carrinho-page.html',
  styleUrl: './carrinho-page.css',
})
export class CarrinhoPage {

  constructor(private router:Router, private carrinhoService:CarrinhoService,){}

}
