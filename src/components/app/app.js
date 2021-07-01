import React, {Component} from 'react';

import ErrorBoundary from '../error-boundary/errorboundry';
import MovieDetails from '../movie-details/movie-details';
import MoviesList from '../movies-list/movies-list';
import SearchBar from '../search-bar/search-bar';

import SwaggerService from '../services/swagger-service';

import './app.css'
import Results from "../results/results";

class App extends Component {

    swaggerService = new SwaggerService()

    state = {
        selectedMovie: null,
        movieList: [],
        filteredMoviesTitle: [],
        filteredMoviesGenre: [],
        searchMovie: '',
        isActive: true,
        title: 'title',
        genre: 'genre'
    }


    /*filteredBy() {
        const { isActive, movieList, searchMovie, title, genre } = this.state

        const movieByTitle = movieList.filter((title) => {
            return title.title.toLowerCase().includes(searchMovie.toLowerCase());
        });

        const movieByGenre = movieList.filter((genre) => {
            return genre.genre.toLowerCase().includes(searchMovie.toLowerCase())
        });

            // 1 // Если кнопка активна и равна Title, то при запросе фильтровать фильм по названию и искать,
        if (isActive === title) {
            return movieByTitle;
        } if (isActive === genre) {
            // 2 // Если кнопка активан и равна Genre - то по жанру.
            return movieByGenre;
        }

        // 3 //
        //Если /~~/ равна rating или release_date, то сортировать по активной нажатой кнопке.
    }*/

    handleSubmit = (e) => {
        e.preventDefault()

        const {movieList, searchMovie, isActive, title, genre} = this.state

        const filteredMoviesTitle = movieList.filter((movie) => {
            return movie.title.toLowerCase().includes(searchMovie.toLowerCase())
        });

        const filteredMoviesGenre = movieList.filter((movie) => {
            return movie.genre.toLowerCase().includes(searchMovie.toLowerCase())
        });

        if (isActive === title) return filteredMoviesTitle
        if (isActive === genre) return filteredMoviesGenre

        this.setState({
            filteredMoviesTitle,
            filteredMoviesGenre
        })


    }

    handleFilterToggle = (e) => {
        e.preventDefault()

        this.setState({
            isActive: !this.state.isActive
        });
    }

    handleChange = (e) => {
        this.setState({
            searchMovie: e.target.value
        });
    }

    handleBack = (e) => {
        e.preventDefault()

        this.setState({
            selectedMovie: null
        });
    }

    onMovieSelected = (id) => {
        this.setState({
            selectedMovie: id
        });
    }

    componentDidMount() {
        this.swaggerService.getAllMovies()
            .then((movieList) => {
                this.setState({
                    movieList
                });
            });
    }

    render() {
        const {searchMovie, isActive, filteredMoviesTitle, filteredMoviesGenre} = this.state

        return (
            <ErrorBoundary>
                <h1>Movie Finder</h1>
                <SearchBar
                    movieList={this.state.movieList}
                    isActive={this.state.isActive}
                    title={this.state.title}
                    genre={this.state.genre}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleFilter={this.handleFilterToggle}
                />
                <Results
                    moviesLength={isActive
                        ? `${filteredMoviesTitle.length} movies found `
                        : `${filteredMoviesGenre.length} movies found by ${searchMovie} genre`}
                    handleSort={this.handleSort}
                />
                <MovieDetails
                    movieId={this.state.selectedMovie}
                    handleBack={this.handleBack}/>
                <MoviesList
                    movieList={isActive ? filteredMoviesTitle : filteredMoviesGenre}
                    onMovieSelected={this.onMovieSelected}/>
            </ErrorBoundary>
        );
    }
    ;
}

export default App;