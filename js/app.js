import {Calculadora} from './calculadora.js';

const tabla = document.querySelector('#calculadora');
const respuesta = document.querySelector('#resultado')
const calculadora = new Calculadora()
let numeros =''
tabla.addEventListener('click', (e)=>{
     const valor = e.target.value;
     numeros = numeros + valor
     console.log(numeros);
     if(valor !== undefined || valor !== 'Enter'){
          respuesta.innerHTML = `${respuesta.innerHTML}${valor}`;
     }
     if(valor === 'Enter'){
          console.log('listo');
     }
     
     console.log(calculadora.mostrarDatos());
})

