import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Usuario } from "../../models/usuario";
import { LoginProvider } from "../../providers/login/login";
import { Credencial } from '../../models/credencial';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public loginProvider: LoginProvider
    ) {
      this.credencial = new Credencial();
  }

  credencial: Credencial;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    this.loginProvider.register(this.credencial)
  }
  
}
