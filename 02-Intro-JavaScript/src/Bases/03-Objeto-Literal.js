const persona = {
	nombre: 'Brandon',
	apellido: 'Stark',
	edad: 24,
	direccion: {
		calle: 'Lorem',
		ciudad: 'Mexico',
		lat: 14.2587,
		long: 65.54564
	}
};

console.log({persona});
console.log(persona)
console.table(persona)

//Copia del objeto Persona pero sin apuntar al mismo espacio de memoria
const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)