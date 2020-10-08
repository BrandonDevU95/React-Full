import React from 'react';
import { useState } from 'react';
import { ShowIncrememnt } from './ShowIncrememnt';

import './custom.css';
import { useCallback } from 'react';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	console.log('Me volvi a generar :(');

	const increment = useCallback(() => {
		setCounter((c) => c + 1);
	}, [setCounter]);

	return (
		<div>
			<h1>useCallBakcHook {counter}</h1>
			<hr />

			<ShowIncrememnt increment={increment} />
		</div>
	);
};
