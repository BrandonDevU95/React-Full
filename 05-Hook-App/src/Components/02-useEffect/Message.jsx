import React, { useEffect } from 'react';

export const Message = () => {
	useEffect(() => {
		const mouseMove = (e) => {
			// const coors = {x: e.x, y: e.y}
			// console.log(coors);
			console.log(':D');
		};

		window.addEventListener('mousemove', mouseMove);
		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);
	return (
		<div>
			<h3>Lorem ipsum dolor sit amet.</h3>
		</div>
	);
};
