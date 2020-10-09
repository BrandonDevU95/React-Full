import React from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './custom.css';

export const TodoApp = () => {
	const initialState = [
		{
			id: new Date().getTime(),
			desc: 'Aprender React',
			done: false,
		},
	];

	const [todo] = useReducer(todoReducer, initialState);
	return (
		<div>
			<h1>TodoApp</h1>
			<hr />

			<ul>
				<li>Hola</li>
				<li>Mundo</li>
				<li>Brandon</li>
			</ul>
		</div>
	);
};
