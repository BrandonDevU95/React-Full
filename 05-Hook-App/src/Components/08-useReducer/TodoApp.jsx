import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../Hooks/useForm';

import './custom.css';

const init = () => {
	// return [
	// 	{
	// 		id: new Date().getTime(),
	// 		desc: 'Aprender React',
	// 		done: false,
	// 	},
	// ];
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	// const initialState = [
	// 	{
	// 		id: new Date().getTime(),
	// 		desc: 'Aprender React',
	// 		done: false,
	// 	},
	// ];

	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{ description }, handleInputChange, reset] = useForm({
		description: '',
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		const action = {
			type: 'add',
			payload: newTodo,
		};

		dispatch(action);
		reset();
	};

	const handleDelete = (todoId) => {
		const action = {
			type: 'delete',
			payload: todoId,
		};

		dispatch(action);
	};

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
								<button
									type='button'
									className='btn btn-danger'
									onClick={() => handleDelete(todo.id)}
								>
									Borras
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='description'
							placeholder='Aprender...'
							autoComplete='off'
							className='form-control'
							onChange={handleInputChange}
							value={description}
						/>
						<button type='submit' className='btn btn-info mt-1 btn-block'>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
