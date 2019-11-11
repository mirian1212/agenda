import { Component} from '@angular/core';
import { Usuario } from './entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html',
})
export class CadastroComponent {
  cadastro: Usuario = new Usuario();
  constructor(private banco: AngularFireDatabase, private rota: Router) {
}

  ngOnInit() {}

  salvar() {
      this.banco.list('cadastro').push(this.cadastro);
      this.cadastro = new Usuario();
    //  this.rota.navigate(['home']);
      alert('Salvo com sucesso! Agora escolha a opção de treino');
    }
}
