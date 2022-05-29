import Slider from 'react-slick';

import { NavigatePrevious, NavigateNext } from './Arrows';

import styles from '../stylesheets/components/MovieRow.module.css';

export default function MovieRow ({ title, items }: any) {
	console.log(items);

	const settings = {
		dots: false,
		arrow: true,

		speed: 500,
		infinite: false,

		slidesToShow: 8,
		slidesToScroll: 8,

		nextArrow: <NavigateNext />,
		prevArrow: <NavigatePrevious />,

		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}, {
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<section className={ styles.movieRow }>
			<h2>{ title }</h2>

			<div className={ styles.wrapper }>
				<Slider {...settings} className={ styles.moviesList }>
					{ items.results.length > 0 && items.results.map((item: any, key: number) => (
						<div key={ key } className={ styles.movieItem }>
							<img src={ `https://image.tmdb.org/t/p/original${ item.poster_path }` } alt={ item.original_title } />
						</div>
					)) }
				</Slider>
			</div>
		</section>
	)
}
