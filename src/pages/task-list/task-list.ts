import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarefa } from "../../models/tarefa";
import { TaskProvider } from "../../providers/task/task";
import { TaskAddPage } from "../task-add/task-add";

@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {

  tarefas:Array<Tarefa>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskProvider: TaskProvider, public ngZone: NgZone, public toastCtrl: ToastController){
  }

  ionViewDidLoad() {
    this.taskProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa ' + tarefaRemovida.titulo + ' removida',
        duration: 2000
      }).present();
    })

    this.taskProvider.reference.on('value', (snapshot) => {
      this.ngZone.run(() => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        });
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTask(tarefa: Tarefa){
    this.navCtrl.push(TaskAddPage,{'tarefa': tarefa});
  }

  adicionarTask(){
    this.navCtrl.push(TaskAddPage,{'tarefa': new Tarefa()})
  }

  deletarTask(tarefa: Tarefa){
    this.taskProvider.deletar(tarefa)
    .then(
      success => console.log('tarefa deletada')
    )
    .catch(
      error => console.log('não foi possivel deletar')
    )
  }
}
