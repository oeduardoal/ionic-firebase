import { Injectable } from '@angular/core';
import { Tarefa } from "../../models/tarefa";
import { LoginProvider } from "../login/login";
import firebase from 'firebase';
@Injectable()
export class TaskProvider {

  reference;

  constructor( public loginProvider: LoginProvider){
    this.initialize();
  }

  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/tarefas/');
  }

  save(tarefa: Tarefa){
    let refKey;
    if(tarefa.keyReference != undefined){
      refKey = tarefa.keyReference;
    }else{
      refKey = this.reference.push().key;
      tarefa.keyReference = refKey;
    }
      console.log('child');
    this.reference.child(refKey).update(tarefa)
  }

  deletar(tarefa: Tarefa){
    return this.reference.child(tarefa.keyReference).remove();
  }
}
