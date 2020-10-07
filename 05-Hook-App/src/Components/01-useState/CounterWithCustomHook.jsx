import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter(50);

	return (
		<div>
			<h1>Counter with Hook: {state}</h1>
			<hr />

			<button
				type='button'
				onClick={() => increment(2)}
				className='btn btn-primary'
			>
				+1
			</button>
			<button
				type='button'
				onClick={() => decrement(2)}
				className='btn btn-warning'
			>
				-1
			</button>
			<button type='button' onClick={reset} className='btn btn-danger'>
				Reset
			</button>
		</div>
	);
};
