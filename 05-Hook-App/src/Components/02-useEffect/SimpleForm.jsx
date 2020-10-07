import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './custom.css';

export const SimpleForm = () => {
	const [formSate, setFormSate] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formSate;

	useEffect(() => {
		console.log('hey');
	}, []);

	useEffect(() => {
		console.log('FormState Cambio');
	}, [formSate]);

	useEffect(() => {
		console.log('FormState Cambio');
	}, [email]);

	const handleInputChange = ({ target }) => {
		setFormSate({
			...formSate,
			[target.name]: target.value,
		});
	};

	return (
		<div>
			<h1>useEffect</h1>
			<hr />

			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Tu Nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='correo@algo.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
};
