import {Calculadora} from './calculadora.js';

const tabla = document.querySelector('#calculadora');
const respuesta = document.querySelector('#resultado')
const calculadora = new Calculadora()

let muestra ='';
let arrNum = [];
let numeros =''
tabla.addEventListener('click', (e)=>{
     let valor='';
     let tipo='';
     if(e.target.classList.contains('numero')){
           valor = e.target.value;
           numeros = numeros + valor
           muestra = muestra + valor
     }else if(e.target.classList.contains('tipo')){
           tipo = e.target.value
           arrNum.push(numeros)
           arrNum.push(tipo)
           numeros='';
           muestra = muestra + tipo
           
     }
     
     console.log(arrNum);
     
          respuesta.innerHTML = `${muestra}`;
     
     if(e.target.value === 'Enter'){
          console.log('listo');
     }
     
     // console.log(calculadora.mostrarDatos());
})

