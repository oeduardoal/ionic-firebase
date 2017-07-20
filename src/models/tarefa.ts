import { TarefaState } from "./tarefa-state";

export class Tarefa{
    codigo:number;
    titulo:string;
    descricao:string;
    state:TarefaState;

    constructor(codigo?:number,titulo?:string, descricao?:string,state?:any){
        this.codigo = codigo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.state = TarefaState.NOVA;
    }
}