import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {SalvarContatoComponent} from './contato/salvar-contato/salvar-contato.component';
import {ListarContatoComponent} from './contato/listar-contato/listar-contato.component';
@NgModule({
  declarations: [AppComponent, SalvarContatoComponent, ListarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  AngularFireModule.initializeApp({
    apiKey: "AIzaSyDaDcrYFB1iB9BQTlhyjpff006osjB31-w",
    authDomain: "agenda-35eaf.firebaseapp.com",
    databaseURL: "https://agenda-35eaf.firebaseio.com",
    projectId: "agenda-35eaf",
    storageBucket: "",
    messagingSenderId: "717497152550",
    appId: "1:717497152550:web:b4e72db28a594645"
  }), AngularFireDatabaseModule // biblioteca 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
