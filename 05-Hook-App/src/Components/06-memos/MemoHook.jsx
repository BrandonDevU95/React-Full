import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { procesoPesado } from '../../Helpers/procesoPesado';

import './custom.css';

export const MemoHook = () => {
	const { counter, increment } = useCounter(2000);
	const [show, setShow] = useState(true);
	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<div>
			<h1>Memo Hook</h1>
			<h3>
				Counter <small>{counter}</small>
			</h3>
			<hr />

			{memoProcesoPesado}
			<br />

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
