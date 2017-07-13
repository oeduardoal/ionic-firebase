import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Usuario } from "../../models/usuario";
import { LoginProvider } from "../../providers/login/login";
import { Credencial } from "../../models/credencial";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public loginProvider: LoginProvider
    ) {
      this.credencial = new Credencial();
  }

  credencial: Credencial; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  doLogin(){
    this.loginProvider.loginWithCredential(this.credencial)
  }
  doLoginGoogle(){
    this.loginProvider.loginWithGoogle()
  }
}
