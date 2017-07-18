import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tarefa } from "../../models/tarefa";
import { LovProvider } from "../../providers/lov/lov";

@Component({
  selector: 'page-task-add',
  templateUrl: 'task-add.html',
})
export class TaskAddPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lovProvider: LovProvider) {
  }

  ionViewDidLoad() {
    this.tarefa = this.navParams.get('tarefa')
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }
    
  }

}
