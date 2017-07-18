import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Tarefa } from "../../models/tarefa";

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TaskProvider {

  constructor(public http: Http) {}

  getAll():Array<Tarefa>{
    return new Array();
  }

  add(tarefa:Tarefa){

  }
}
