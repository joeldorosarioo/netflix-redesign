import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

import IMovieCommon from '../interfaces/IMovieCommon';

import styles from '../stylesheets/components/FeaturedMovie.module.css';

type FeaturedMovieProps = {
  movie: IMovieCommon
}

export default function FeaturedMovie({ movie }: FeaturedMovieProps) {
	const regExpFirstAirDate = new RegExp('^[0-9]{3}[a-zA-Z0-9]', 'g');

	return (
		<section className={ styles.featuredMovie } style={{
			backgroundImage:
				`linear-gradient(360deg, #111111, rgba(17, 17, 17, .46)), url(https://image.tmdb.org/t/p/original/${ movie?.backdrop_path })`
		}}>
			<div className={ styles.movieInfo }>
				<h1 className={ styles.movieTitle }>{ movie?.name }</h1>

				<div className={ styles.wrapper }>
					<span className={ styles.voteAverage }>{ Math.round((100 * movie?.vote_average) / 10) }% Match</span>
					<span className={ styles.firstAirDate }>{ regExpFirstAirDate.exec(movie?.first_air_date) }</span>

					<span className={ styles.numberOfSeasons }>
						{ movie?.number_of_seasons } Season{ movie?.number_of_seasons !== 1 ? 's' : '' }
					</span>
				</div>

				<div className={ styles.movieDescription }>{ movie?.overview }</div>

				<div className={ styles.buttonsWrapper }>
					<button type="button" className={ styles.watchButton }>
						<PlayArrowIcon /> Play
					</button>

					<button type="button" className={ styles.myListButton }>
						<AddIcon /> Watch List
					</button>
				</div>

				<div className={ styles.movieGenres }>
					<strong>Gêneros:</strong> { movie?.genres.map((gender: any, index: number) => (
						index !== movie?.genres.length - 1 ? (
							<span key={ gender.id }>{`${ gender.name }, `}</span>
						) : (
							<span key={ gender.id }>{ gender.name }</span>
						)
					)) }
				</div>
			</div>
		</section>
	)
}
