import React, {Component} from 'react';
import ErrorBoundary from '../error-boundary/error-boundary';
import SearchBar from '../search-bar/search-bar';
import Results from '../results/results';
import MoviesList from '../movies-list/movies-list';
import MovieDetails from '../movie-details/movie-details';
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            selectedMovie: null,
            searchMovie: '',
            isActive: true,
            isSorted: true,
            loading: true,
        }

        this.handleSearch = this.handleSearchMovie.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        this.handleErrorImage = this.handleErrorImage.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleMovieSelected = this.handleMovieSelected.bind(this);
    }

    componentDidMount() {
        fetch(`https://reactjs-cdp.herokuapp.com/movies`)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    movies: result.data,
                });
            })
            .catch(() => {
                const error = new Error('some error')
                console.error(error)
            });
    };

    handleSubmit(event) {
        event.preventDefault()
        const {isActive, searchMovie, isSorted} = this.state
        const url = `https://reactjs-cdp.herokuapp.com/movies?sortBy=${isSorted ? 'release_date' : 'vote_average'}&sortOrder=${isSorted ? 'asc' : 'desc'}&search=${searchMovie}&searchBy=${isActive ? 'title' : 'genres'}`

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Could not fetch ${response.url} status: ${response.status}`)
                }
                return response.json();

            })
            .then((result) => {
                this.setState({
                    movies: result.data,
                });
            })
            .catch(() => {
                const error = new Error('Error')
                console.error(error)
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

    handleSearchMovie(event) {
        this.setState({
            searchMovie: event.target.value
        });
    };

    handleBack() {
        this.setState({
            selectedMovie: null
        });
    };

    handleMovieSelected(id) {
        this.setState({
            selectedMovie: id
        });
    };

    handleErrorImage(event) {
        event.target.src = 'https://allmovies.tube/assets/img/no-poster.png'
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
                        onSearchMovie={this.handleSearch}
                        onSubmit={this.handleSubmit}
                        onFilter={this.handleFilterToggle}
                    />
                ) : (
                    <MovieDetails
                        movieId={selectedMovie}
                        onErrorImage={this.handleErrorImage}
                        onBack={this.handleBack}/>
                )}
                <Results
                    isSorted={isSorted}
                    onHSort={this.handleSort}
                    moviesLength={movies.length > 1 ? `${movies.length} movies found` : `${movies.length} movie found`}
                />
                {movies.length ? (
                    <MoviesList
                        movies={movies}
                        onMovieSelected={this.handleMovieSelected}
                        onErrorImage={this.handleErrorImage}
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