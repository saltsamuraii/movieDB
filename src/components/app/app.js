import React, {Component} from 'react';
import ErrorBoundary from '../error-boundary/error-boundary';
import SearchBar from '../search-bar/search-bar';
import Results from '../results/results';
import MoviesList from '../movies-list/movies-list';
import MovieDetails from '../movie-details/movie-details';
import './app.css'

class App extends Component {

    state = {
        movies: [],
        selectedMovie: null,
        searchMovie: '',
        isActive: true,
        isSorted: true,
    }

    componentDidMount() {
        fetch(`https://reactjs-cdp.herokuapp.com/movies`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    movies: result.data
                });
            })
            .catch((error) => {
                console.log(error + error.message)
            });
    };

    handleSubmit(e) {
        e.preventDefault()
        const {isActive, searchMovie, isSorted} = this.state
        const requestUlr = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${isSorted ? 'release_date' : 'vote_average'}&sortOrder=${isSorted ? 'asc' : 'desc'}&search=${searchMovie}&searchBy=${isActive ? 'title' : 'genres'}`

        fetch(requestUlr)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Could not fetch ${response.url} status: ${response.status}`)
                }
                return response.json();

            })
            .then((result) => {
                this.setState({
                    movies: result.data
                });
            })
            .catch((error) => {
                console.log(Error + error.message + error.status)
            });
    };

    handleSort() {
        this.setState(prevState => ({
            isSorted: !prevState.isSorted
        }));
    };

    handleFilterToggle() {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    };

    handleSearchMovie(e) {
        const value = e.target.value
        this.setState({
            searchMovie: value
        });
    };

    handleBack() {
        this.setState({
            selectedMovie: null
        });
    };

    onMovieSelected(id) {
        this.setState({
            selectedMovie: id
        });
    };

    handleErrorImage(e) {
        e.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
    };

    render() {
        const {movies, searchMovie, isActive, isSorted, selectedMovie} = this.state

        return (
            <ErrorBoundary>
                {!selectedMovie ? (
                    <SearchBar
                        movies={movies}
                        isActive={isActive}
                        searchMovie={searchMovie}
                        handleSearchMovie={this.handleSearchMovie.bind(this)}
                        handleSubmit={this.handleSubmit.bind(this)}
                        handleFilter={this.handleFilterToggle.bind(this)}
                    />
                ) : (
                    <MovieDetails
                        movieId={selectedMovie}
                        handleErrorImage={this.handleErrorImage.bind(this)}
                        handleBack={this.handleBack.bind(this)}/>
                )}
                <Results
                    isSorted={isSorted}
                    handleSort={this.handleSort.bind(this)}
                    moviesLength={ movies.length > 1 ? `${movies.length} movies found` : `${movies.length} movie found` }
                />
                {movies.length ? (
                    <MoviesList
                        movies={movies}
                        onMovieSelected={this.onMovieSelected.bind(this)}
                        handleErrorImage={this.handleErrorImage.bind(this)}
                    />
                ) : (
                    <h2 className='header__text'>No movies found</h2>
                )}
            </ErrorBoundary>
        );
    }
    ;
}

export default App;