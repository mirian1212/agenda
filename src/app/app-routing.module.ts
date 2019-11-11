import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {SalvarContatoComponent} from './contato/salvar-contato/salvar-contato.component';
import {ListarContatoComponent} from './contato/listar-contato/listar-contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path: 'salvar-contato', component: SalvarContatoComponent},
  {path: 'listar-contato', component: ListarContatoComponent},
  { path: 'cadastro', component: CadastroComponent },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
