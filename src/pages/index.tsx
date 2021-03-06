import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import IMovieCommon from '../interfaces/IMovieCommon';
import IMovieList from '../interfaces/IMovieList';

import Header from '../components/Header';
import FeaturedMovie from '../components/FeaturedMovie';
import MovieRow from '../components/MovieRow';
import Loader from '../components/Loader';

import TMDB from '../utils/Tmdb';

export default function Home () {
	const [movieList, setMovieList] = useState([]);
	const [featuredMovie, setFeaturedMovie] = useState<IMovieCommon>();

	useEffect(() => {
		(async () => {
			let list: any = await TMDB.getAllData();
			let originals = list.filter((i: { slug: string; }) => i.slug === 'originals');

			let randomMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			let featuredMovie: IMovieCommon = await TMDB.getMovieInfo(originals[0].items.results[randomMovie].id, 'tv');

			setMovieList(list);
			setFeaturedMovie(featuredMovie);
		})();
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Netflix - Assista a Séries e Filmes On-line</title>
			</Head>

			<Header />

			{ featuredMovie &&
					<FeaturedMovie movie={ featuredMovie } />
			}

			<div className="movieList">
				{ movieList.map((item: IMovieList, i: number) => (
					<MovieRow key={ i } title={ item.title } items={ item.items } />
				)) }
			</div>

			{ movieList.length <= 0 && <Loader /> }
		</React.Fragment>
	)
}
