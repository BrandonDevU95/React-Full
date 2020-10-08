import React from 'react';

export const ShowIncrememnt = ({ increment }) => {
	return (
		<div>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => {
					increment();
				}}
			>
				Incrementar
			</button>
		</div>
	);
};
