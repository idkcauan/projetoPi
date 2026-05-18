import { Produto } from "./produto.model";

export interface CarrinhoItem{
    id?:string,
    produto:Produto,
    quantidade:number
}