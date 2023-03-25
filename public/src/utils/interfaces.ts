export interface ICliente {
    
    id: string;
    nombre: string;
    cuit: string;

}
export interface IFormCliente {
     
    nombre: string;
    cuit: string;

}

export interface IViaje {
    
    id: string;
    nombre_chofer:string;
    apellido_chofer:string;
    dni_chofer:number;
    patente:string;
    cuit_cliente:string;
    origen:string;
    destino:string;

}

export interface IFormViaje {
     
    nombre_chofer:string;
    apellido_chofer:string;
    dni_chofer:number;
    patente:string;
    cuit_cliente:string;
    origen:string;
    destino:string;

}