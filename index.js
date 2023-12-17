const contactos = ["David Hernandez", "Alex Hernandez", "Cielo Herrera", "Emilio sepulveda", "juan Perez"]

function agregarContacto(){
let nuevoContacto = "Adrian España"
contactos.unshift(nuevoContacto);
}
agregarContacto();


let nuevaAge
function borrar(){
   nuevaAge = contactos.pop();
}
borrar();

function mostrar(){
    console.log(contactos);
}
mostrar(nuevaAge);