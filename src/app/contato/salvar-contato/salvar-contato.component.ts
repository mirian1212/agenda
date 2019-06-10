import { Component, OnInit } from '@angular/core';
import {Contato} from '../entidade/contato';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.component.html',
  styleUrls: ['./salvar-contato.component.scss'],
})
export class SalvarContatoComponent implements OnInit {
 contato: Contato= new Contato(); //objeto criado que possui dois atributos(nome e telefone)

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvar(){
    this.banco.list('contato').push(this.contato);
    this.contato= new Contato();
    alert ('Turuturuturu');

  }

}
