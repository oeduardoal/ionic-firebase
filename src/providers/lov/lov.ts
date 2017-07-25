import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { TarefaState } from "../../models/tarefa-state";

/*
  Generated class for the LovProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LovProvider {

  getTarefaStates():Array<TarefaState>{
    return [TarefaState.NOVA,TarefaState.EXECUTANDO,TarefaState.FINALIZADO]
  }

}
