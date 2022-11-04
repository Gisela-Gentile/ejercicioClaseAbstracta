abstract class Vehiculo {
    protected velocidadActual : number;
    protected estaPrendido: boolean;
    protected tanqueLleno: number;

    public constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
        this.tanqueLleno=5;
        
    }
    abstract cargarNafta(): void;
    abstract acelerar() : void ;
    public frenar(): void{
        this.velocidadActual=0
    }
    public prender () : void {
        this.estaPrendido = true;
    }
    public apagar() : void {
        this.estaPrendido = false;
    }
}
class AutoCiudad extends Vehiculo {
  
    public cargarNafta(): void {
        this.tanqueLleno+= 40
          }
    public acelerar(): void {
        this.velocidadActual+= 10;
    }
}
class AutoDeportivo extends Vehiculo {
    public cargarNafta(): void {
        this.tanqueLleno+= 50
          }
    public acelerar(): void {
        this.velocidadActual+= 60;
    }
}
class Camioneta extends Vehiculo {
    public cargarNafta(): void {
        this.tanqueLleno+= 60
          }
    public acelerar(): void {
        this.velocidadActual+= 40;
    }
}
let autoCiudad: AutoCiudad= new AutoCiudad();
autoCiudad.prender();
autoCiudad.acelerar();
autoCiudad.cargarNafta();
console.log("-------------------------------------------------------------------------");
console.log(autoCiudad);
autoCiudad.frenar();
autoCiudad.apagar();
console.log("-------------------------------------------------------------------------");
console.log(autoCiudad);
console.log("-------------------------------------------------------------------------");

let autoDeportivo: AutoDeportivo= new AutoDeportivo();
autoDeportivo.prender();
autoDeportivo.cargarNafta();
console.log(autoDeportivo)
console.log("-------------------------------------------------------------------------");


let camioneta: Camioneta= new Camioneta();
camioneta.prender();
camioneta.acelerar();
console.log(camioneta);
console.log("--------------------------------------------------------------------------");



