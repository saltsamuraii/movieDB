import { connect } from 'react-redux';
import SearchInfo from './search-info';
import { MoviesState } from '../../redux/store/store';

const mapStateToProps = ({ movies: { data } }: MoviesState) => ({
  movies: data.length,
});

export const SearchInfoContainer = connect(mapStateToProps, null)(SearchInfo);
