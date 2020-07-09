const nombre = 'Brandon';
const apellido = 'Vargas';

// const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `Hola Mundo`;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
	return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
