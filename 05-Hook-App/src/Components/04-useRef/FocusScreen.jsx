import React from 'react';
import { useRef } from 'react';
import './custom.css';

export const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<div>
			<h1>Focus Sreen</h1>
			<hr />

			<input
				ref={inputRef}
				type='text'
				className='form-control'
				name='name'
				placeholder='Nombre'
			/>

			<button
				type='button'
				className='btn btn-outline-primary mt-5'
				onClick={handleClick}
			>
				Focus
			</button>
		</div>
	);
};
