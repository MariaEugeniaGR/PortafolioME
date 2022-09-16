export class Educacion {
    id? : number;
    nombreE : string;
    fechaI: string;
    fechaF: string;
    descripcionE: string;

    constructor(nombreE: string, fechaI: string, fechaF: string, descripcionE: string){
        this.nombreE = nombreE;
        this.fechaI = fechaI;
        this.fechaF = fechaF;
        this.descripcionE = descripcionE;
    }
}
