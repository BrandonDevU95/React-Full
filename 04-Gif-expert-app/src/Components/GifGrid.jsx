import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	// const [images, setImages] = useState([]);
	const { loading } = useFetchGifs();

	// useEffect(() => {
	// 	getGifs(category).then((imgs) => setImages(imgs));
	// }, [category]);

	return (
		<>
			<h3>{category}</h3>
			{loading ? 'cargando...' : 'Data cargada...'}
			{/* <div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div> */}
		</>
	);
};
