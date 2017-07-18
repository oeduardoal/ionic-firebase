import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Usuario } from "../../models/usuario";
import { LoginProvider } from "../../providers/login/login";
import { Credencial } from "../../models/credencial";
import { TaskListPage } from "../task-list/task-list";

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
    this.credencial = new Credencial();
    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TaskListPage)
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  
  doLogin(){
    this.loginProvider.loginWithCredential(this.credencial)
  }

  doLoginGoogle(){
    this.loginProvider.loginWithGoogle()
  }

  doLoginFacebook(){
    this.loginProvider.loginWithFacebook()
  }
}
