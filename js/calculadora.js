export class Calculadora{

     constructor(){
          this.arregloCalc = [];
          this.valor = '';
          this.accion;
     }

     agregar(valor, accion){
          this.valor= this.valor +valor
          this.accion = accion;
          this.arregloCalc.push(valor)
     }
     mostrarDatos(){
          return this.valor;
     }

     suma(valor1,valor2){
          return valor1+valor2;
     }
     resta(valor1,valor2){
          return valor1-valor2;
     }
     multiplicacion(valor1,valor2){
          return valor1*valor2;
     }
     division(valor1,valor2){
          return valor1/valor2;
     }
     potencia(valor1,valor2){
          return Math.sqr(valor1,valor2);
     }
     porcentaje(valor1,valor2){
          return valor1+valor2;
     }

}