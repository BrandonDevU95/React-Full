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

	const [todos] = useReducer(todoReducer, initialState);
	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ul className='list-group list-group-flush'>
						{todos.map((todo, i) => (
							<li className='list-group-item' key={todo.id}>
								<p className='text-center'>
									{i + 1}. {todo.desc}
								</p>
								<button type='button' class='btn btn-danger'>
									Borras
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					<form action=''>
						<input
							type='text'
							name='description'
							placeholder='Aprender...'
							autoComplete='off'
							className='form-control'
						/>
						<button type='button' className='btn btn-info mt-1 btn-block'>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
