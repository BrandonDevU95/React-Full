const nombre = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Carlos') {
	return 'Hola ' + nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}  `);
