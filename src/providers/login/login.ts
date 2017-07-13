import { Injectable,EventEmitter,NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";
import { Credencial } from "../../models/credencial";


@Injectable()
export class LoginProvider {

  currentUser:any;
  authenticate:boolean;
  loginSuccessEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;

  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSuccessEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();

    firebase.auth().onAuthStateChanged(usuario => {
      this.callbackStateChange(usuario);
    })

  }

  private callbackStateChange(usuario){
    this.ngZone.run(() => {
      if(usuario == null){
        this.currentUser = null;
        this.authenticate = false;
      }else{
        this.currentUser = usuario;
        this.authenticate = true;
      }
    })
  }

  loginWithCredential(credencial: Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
    .then(result => this.callbackSuccessLogin(result))
    .catch(error => this.callbackErrorLogin(error))
  }

  loginWithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => this.callbackSuccessLogin(result))
    .catch(error => this.callbackErrorLogin(error))
  }

  register(credencial: Credencial){
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

  private callbackSuccessLogin(response){
    this.loginSuccessEventEmitter.emit(response.user);
    console.log(response);  
  }
  private callbackErrorLogin(error){
    this.loginSuccessEventEmitter.emit({code: error.code, message: error.message, email:error.email,
    credencial: error.credencial});
  }
}
