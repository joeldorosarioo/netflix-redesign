const API_BASE = 'https://api.themoviedb.org/3/';

const basicFetch = async (endpoint: string) => {
	const request = await fetch(`${ API_BASE }${ endpoint }`);
	return await request.json()
}

export default {
	getAllData: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais Netflix',
				items: await basicFetch(`discover/tv?with_networks=213&api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'trendings',
				title: 'Trending',
				items: await basicFetch(`trending/all/week?api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'top_rated',
				title: 'Top Rated',
				items: await basicFetch(`movie/top_rated?api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'action',
				title: 'Action',
				items: await basicFetch(`discover/movie?with_genres=28&api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'comedy',
				title: 'Comedy',
				items: await basicFetch(`discover/movie?with_genres=35&api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'horror',
				title: 'Horror',
				items: await basicFetch(`discover/movie?with_genres=27&api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(`discover/movie?with_genres=10749&api_key=${ process.env.PUBLIC_API_KEY }`),
			}, {
				slug: 'documentary',
				title: 'Documentary',
				items: await basicFetch(`discover/movie?with_genres=99&api_key=${ process.env.PUBLIC_API_KEY }`),
			},
		]
	},

	getMovieInfo: async (movieID: string, type: string) => {
		return await basicFetch(`${ type }/${ movieID }?api_key=${ process.env.PUBLIC_API_KEY }`);
	}
}
