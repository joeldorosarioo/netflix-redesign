import IMoviesGenres from "./IMoviesGenres";

export default interface IMovieCommon {
  id: number;
  title: string;
  name: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
	number_of_seasons?: number;
	first_air_date: string;
	genres: IMoviesGenres[];
}
