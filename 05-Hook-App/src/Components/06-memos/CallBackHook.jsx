import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrememnt } from './ShowIncrememnt';

import './custom.css';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	//     setCounter( counter + 1 );
	// }

	console.log('Me volvi a generar :(');

	const increment = useCallback(() => {
		setCounter((c) => c + 1);
	}, [setCounter]);

	useEffect(() => {
		// ???
	}, [increment]);

	return (
		<div>
			<h1>useCallback Hook: {counter} </h1>
			<hr />

			<ShowIncrememnt increment={increment} />
		</div>
	);
};
