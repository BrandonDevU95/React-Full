import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';

export const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState([
		'One Punch',
		'Samurai X',
		'Dragon Ball',
	]);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'HunterXHunter']);
	// };

	return (
		<div>
			<h2>GifExpertApp</h2>
			<AddCategory />
			<hr />

			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</div>
	);
};
