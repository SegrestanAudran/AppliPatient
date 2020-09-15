export class Patient {
    name : string; 
    logo : string;
    money: number; 
    score: number; 
    totalangels: number;
    activeangels: number;
    angelbonus: number;
    lastupdate: string; 
}

export class Observation {
    id : number;
    name : string;
    logo : string;
    cout : number;
    croissance: number;
    revenu: number;
    vitesse: number;
    quantite: number;
    timeleft: number;
    managerUnlocked: boolean;

}

export class MedicationOrder {
    name: string;
    logo: string;
    seuil: number;
    idcible: number;
    ratio: number;
    typeratio: string;
    unlocked: boolean;
}

export class Medecin {

}