const nombre = 'julio';
const apellido='ore';

//primera forma de concatenar
//const nombreCompleto= nombre+' '+apellido;
//concatenar con javascript 
//se dan los saltos de linea de forma natural
const nombreCompleto=`${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola '+nombre;

}

console.log(`este es un texto: ${ getSaludo(nombre) }`);