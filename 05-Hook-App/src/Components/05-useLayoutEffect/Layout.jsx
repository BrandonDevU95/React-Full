import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

import './custom.css';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';

export const Layout = () => {
	const { counter, increment } = useCounter(1);

	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { quote } = !!data && data[0];

	const pTag = useRef();

	useLayoutEffect(() => {
		console.log(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote ref={pTag} className='blockquote text-right'>
				<p className='mb-0'>{quote}</p>
			</blockquote>

			<button type='button' onClick={increment} className='btn btn-primary'>
				Next
			</button>
		</div>
	);
};
