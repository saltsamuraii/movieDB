import React from 'react';
import RadioButton from "../radio-button/radio-button";
import './search-info.css'

function SearchInfo(props) {
    const {moviesLength, sortValue, onSort} = props

    return (
        <div className="search-info">
            <span className="search-info__result">{moviesLength}</span>
            <fieldset>
                <legend className="search-info__legend-text">Sort by</legend>
                <RadioButton
                    value="release date"
                    isChecked={sortValue === "release date"}
                    onChange={onSort}
                />
                <RadioButton
                    value="rating"
                    isChecked={sortValue === "rating"}
                    onChange={onSort}
                />
            </fieldset>
        </div>
    );
}

export default SearchInfo;