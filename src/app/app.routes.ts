import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';
import { HomeComponent } from './components/home.component/home.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario.component/cadastrar-usuario.component';
import { CorridaComponent } from './components/corrida.component/corrida.component';
import { Estoque } from './components/estoque/estoque';
import { SuplementosComponent } from './components/suplementos.component/suplementos.component';
import { BasqueteComponent } from './components/basquete.component/basquete.component';
import { VoleiComponent } from './components/volei.component/volei.component';
import { CalcadosComponent } from './components/calcados.component/calcados.component';
import { OfertasComponet } from './components/ofertas.componet/ofertas.componet';
import { RoupasComponent } from './components/roupas.component/roupas.component';
import { ProdutoPage } from './components/produto/produto';
import { CarrinhoPage } from './components/carrinho-page/carrinho-page';
import { CompraFinalizada } from './components/compra-finalizada/compra-finalizada';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'login',
        component: LoginComponent,
        title: 'Tela login'
    },
    {
        path:'cadastrar-usuario',
        component: CadastrarUsuarioComponent,
        title: 'Cadastro de usuário'
    },
    {
        path:'corrida',
        component: CorridaComponent,
        title:'Corrida'
    },
    {
        path:'estoque',
        component: Estoque,
        title:'Estoque'
    },
    {
        path:'suplementos',
        component: SuplementosComponent,
        title:'Suplementos'
    },
    {
        path:'basquete',
        component: BasqueteComponent,
        title:'Basquete'
    },
    {
        path: 'volei',
        component: VoleiComponent,
        title: 'Volei'
    },
    {
        path: 'calcados',
        component: CalcadosComponent,
        title: 'Calçados'
    },
    {
        path: 'ofertas',
        component: OfertasComponet,
        title: 'Ofertas'
    },
    {
        path: 'roupas',
        component: RoupasComponent,
        title: 'Roupas'
    },
    {
        path: 'produto/:id',
        component: ProdutoPage,
        title: 'Produto'
    },
    {
        path:'carrinho',
        component: CarrinhoPage,
        title: 'Carrinho'
    },
    {
        path:'finalizado',
        component: CompraFinalizada,
        title: 'Obrigado pela compra!'
    }
];
