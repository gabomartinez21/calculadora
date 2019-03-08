export class Calculadora{

     constructor(){
          this.arregloCalc = [];
          this.accion;
     }

     agregar(valor, accion){
          this.valor= this.valor +valor
          this.accion = accion;
          this.arregloCalc.push(valor)
     }
     mostrarDatos(arrayNum, arrayAcciones){
          return accion(arrayNum, arrayAcciones);
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
     accion(numeros, acciones){
          let respuestas = [];
          acciones.forEach((accion,i)=>{
               switch(accion){
                    case '+':
                         respuestas.push(suma(numeros[i-1],numeros[i+1]))
                    break;
                    case '-':
                         respuestas.push(resta(numeros[i-1],numeros[i+1]))
                    break;
                    case '*':
                         respuestas.push(multiplicacion(numeros[i-1],numeros[i+1]))
                    break;
                    case '/':
                         respuestas.push(division(numeros[i-1],numeros[i+1]))
                    break;
                    case '^':
                         respuestas.push(potencia(numeros[i-1],numeros[i+1]))
                    break;
                    case '%':
                         respuestas.push(porcentaje(numeros[i-1],numeros[i+1]))
                    break;
                    default:
                         console.log('Error');
                    break;
               }
          })
          let respuesta;
          respuestas.forEach(res => respuesta+=res)
          return respuesta
     }

}