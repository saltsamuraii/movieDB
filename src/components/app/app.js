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
        isSorted: true,
        title: 'title',
        genre: 'genre',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {movieList, searchMovie, isActive, title, genre} = this.state

        const filteredMoviesTitle = movieList.filter((movie) => {
            return movie.title.toLowerCase().includes(searchMovie.toLowerCase());
        });

        const filteredMoviesGenre = movieList.filter((movie) => {
            return movie.genre.toLowerCase().includes(searchMovie.toLowerCase());
        });

        if (isActive === title) return filteredMoviesTitle;
        if (isActive === genre) return filteredMoviesGenre;

        this.setState({
            filteredMoviesTitle,
            filteredMoviesGenre
        });
    }


    handleSort = (e) => {
        e.preventDefault()

        this.setState({
            isSorted: !this.state.isSorted
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
        const {searchMovie, isActive, isSorted, filteredMoviesTitle, filteredMoviesGenre, movieList} = this.state

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
                    isActive={isActive}
                    isSorted={isSorted}
                    moviesLengthTitle={filteredMoviesTitle.length > 0 ? `${filteredMoviesTitle.length} movies found` : "No movies found"}
                    moviesLengthGenre={filteredMoviesGenre.length > 0 ? `${filteredMoviesGenre.length} movies found by ${searchMovie} genre` : "No movies found"}
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