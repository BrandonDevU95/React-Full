import React from 'react';
import { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';

import './custom.css';
import { Small } from './Small';

export const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<div>
			<h1>
				Counter <Small value={counter} />
			</h1>
			<hr />

			<button type='button' className='btn btn-primary' onClick={increment}>
				+1
			</button>

			<button
				type='button'
				className='btn btn-success ml-3'
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};
