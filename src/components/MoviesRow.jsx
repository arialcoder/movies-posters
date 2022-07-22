import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const MoviesRow = ({ title, fetchUrl }) => {
	const base_url = 'https://api.themoviedb.org/3';
	const urlImage = 'https://image.tmdb.org/t/p/w500/';
	const endPoint = `${base_url}${fetchUrl}`;

	const [movies, setMovies] = useState([]);

	const slider = useRef(null);

	useEffect(() => {
		axios.get(endPoint).then(response => {
			setMovies(response.data.results);
		});
	}, [fetchUrl]);

	const slideLeft = () => {
		if (slider.current.children.lenght > 0) {
			slider.current.scrollLeft = slider.current.scrollLeft - 500;
		}
	};

	const slideRight = () => {
		slider.current.scrollLeft = slider.current.scrollLeft + 500;
	};

	return (
		<div className='container px-4 h-56 mt-5'>
			<h2 className=''>{title}</h2>

			<div className='flex items-center mt-4 overflow-y-hidden p-5 relative'>
				<MdChevronLeft
					onClick={slideLeft}
					className='bg-white left-0 rounded-full opacity-25 hover:opacity-100 cursor-pointer z-10 absolute '
					size={40}
					color='000'
				/>
				<div
					ref={slider}
					className='flex items-center overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth relative'>
					{movies &&
						movies.map(movie => (
							<img
								className='object-contain max-h-40 mr-4 transform transition duration-500 hover:scale-105'
								key={movie.id}
								src={`${urlImage}${movie?.poster_path}`}
								alt={movie?.title}
							/>
						))}
					<MdChevronRight
						onClick={slideRight}
						className='bg-white right-0 rounded-full opacity-25 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block absolute '
						size={40}
						color='000'
					/>
				</div>
			</div>
		</div>
	);
};
