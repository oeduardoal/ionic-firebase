import { Injectable } from '@angular/core';
import { Tarefa } from "../../models/tarefa";
@Injectable()
export class TaskProvider {

  getAll():Array<Tarefa>{
    return new Array();
  }

  add(tarefa:Tarefa){

  }
}
