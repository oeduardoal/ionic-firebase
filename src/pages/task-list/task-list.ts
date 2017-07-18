import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tarefa } from "../../models/tarefa";
import { TaskProvider } from "../../providers/task/task";
import { TaskAddPage } from "../task-add/task-add";

@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {

  tarefas:Array<Tarefa>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskProvider: TaskProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
    this.tarefas = this.taskProvider.getAll(); 
  }
  doAddTask(){
    this.navCtrl.push(TaskAddPage,{'tarefa': new Tarefa()})
  }
}
