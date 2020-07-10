//Funciones en JS
// const saludar = function(nombre) {
// 	return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
	return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Veggeta'));
console.log(saludar3('Goku'));
console.log(saludar4(''));

const getUser = () => {
	return {
		uid: 'ABC123',
		username: 'User_Name321',
	};
};

console.log(getUser());

//Tarea
//1.- Transforme en una funcion de flecha
//2.- Tiene que retornar un objeto implicito
//3.- Que funcione

// function getUsuarioActivo(nombre) {
// 	return {
// 		uid: 'ABC670',
// 		username: nombre,
// 	};
// }

const getUsuarioActivo = (nombre) => ({
	uid: 'ABC670',
	username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

console.log('');
