import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import './custom.css';

export const RealExampleRef = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<h1>Real Example Ref</h1>
			<hr />

			{show && <MultipleCustomHooks />}

			<button
				type='button'
				className='btn btn-outline-primary'
				onClick={() => {
					setShow(!show);
				}}
			>
				Show/Hide
			</button>
		</div>
	);
};
