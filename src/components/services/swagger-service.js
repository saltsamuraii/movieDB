export default class SwaggerService {

    apiBase = 'https://reactjs-cdp.herokuapp.com';

    async getResource(url) {
        const res = await fetch(`${this.apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllMovies() {
        const res = await this.getResource(`/movies/`)
        return res.data.map(this.transformMovie);
    }

    async getMovie(id) {
      const movie = await this.getResource(`/movies/${id}/`)
        return this.transformMovie(movie);
    }

    transformMovie = (movie) => {
        return {
            id: movie.id,
            title: movie.title,
            rating: movie.vote_average,
            year: movie.release_date,
            cover: movie.poster_path,
            description: movie.overview,
            genre: movie.genres,
            runtime: movie.runtime
        };
    };
}


