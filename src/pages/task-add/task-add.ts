import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Tarefa } from "../../models/tarefa";
import { LovProvider } from "../../providers/lov/lov";
import { TaskProvider } from "../../providers/task/task";

@Component({
  selector: 'page-task-add',
  templateUrl: 'task-add.html',
})
export class TaskAddPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lovProvider: LovProvider, public taskProvider: TaskProvider,public viewCtrl: ViewController) {
    this.tarefa = this.navParams.get('tarefa')
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }
  }

  saveTask(){
    this.taskProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

}
