import { Component, Input } from '@angular/core';
import { Tarefa } from "../../models/tarefa";

@Component({
  selector: 'task-list-item',
  templateUrl: 'task-list-item.html'
})
export class TaskListItemComponent {

  @Input()
  tarefa: Tarefa;

}
