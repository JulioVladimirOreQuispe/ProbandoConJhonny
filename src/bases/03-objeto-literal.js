
//cuando se crea un objeto en javascript se crea
//un prototype, es como el adn 
const persona={
    nombre:'julio',
    apellido:'ore',
    edad:21,
    direccion: {
        ciudad:'Lima',
        zip:'323',
        lat:'12312323',
    }
};
//otra forma de imprimir obejtos en tablas de forma ordenada
//console.table(persona);
console.log(persona);
const persona2=persona;

//Hacer un clkn de un objeto
const persona3={...persona};

console.log(persona2);

