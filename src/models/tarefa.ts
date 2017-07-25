import { TarefaState } from "./tarefa-state";

export class Tarefa{
    keyReference:number;
    titulo:string;
    descricao:string;
    state:TarefaState;

    constructor(titulo?:string, descricao?:string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.state = TarefaState.NOVA;
    }
}