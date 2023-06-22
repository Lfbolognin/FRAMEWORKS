export class User{
    //atributo
    user: string;
    profissao: string;
    fulano: string;
    dtinicio: Date;
    dtfim: Date;

    constructor(){
    
        this.user ="";
        this.profissao ="";
        this.fulano ="";
        this.dtinicio = new Date();
        this.dtfim =new Date();
    }
    }