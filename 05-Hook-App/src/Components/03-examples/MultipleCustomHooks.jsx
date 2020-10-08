import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from '../../Hooks/useCounter';

import './custom.css';

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);

	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);

	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h1>BreakingBad Quotes</h1>
			<hr />

			{loading ? (
				<div className='alert alert-info text-center' role='alert'>
					<strong>Loading</strong>
					<br />
					<div className='spinner-border text-success' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			) : (
				<blockquote className='blockquote text-right'>
					<p className='mb-0'>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			)}

			<button type='button' onClick={increment} className='btn btn-primary'>
				Next
			</button>
		</div>
	);
};
