import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'HunterXHunter']);
	// };

	return (
		<div>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => {
					return <GifGrid key={category} category={category} />;
				})}
			</ol>
		</div>
	);
};
