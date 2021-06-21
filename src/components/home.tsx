import React, {useContext, useState} from 'react';
import {FirebaseContext} from '../firebase/provider';
import MovieCard from './movieCard';
import Select, {OptionTypeBase} from 'react-select';
import {sortMovies} from '../util/sortMovies';
import Switch from 'react-switch';

const options = [
  {value: 'dateA', label: 'Date (Ascending)'},
  {value: 'dateD', label: 'Date (Descending)'},
  {value: 'rateA', label: 'Rating (Ascending)'},
  {value: 'rateD', label: 'Rating (Descending)'},
  {value: 'titleA', label: 'Title (Ascending)'},
  {value: 'titleD', label: 'Title (Descending)'},
];

const Home = () => {
  const [sortType, setSortType] = useState<OptionTypeBase>(options[1]);
  const [cageFilter, setCageFilter] = useState<boolean>(false)
  const movies = useContext(FirebaseContext).slice().sort((a, b) =>
    sortMovies(a, b, sortType)
  );
  return (
    <div className="homePage" data-testid = 'homePage'>
      <div className="sort">
        <div className = 'cageFilter'>
          <div className = 'filterTitle'>Cage Filter</div>
          <Switch onColor = '#03AC13' uncheckedIcon = {false} checked = {cageFilter} onChange = {(checked)=>setCageFilter(checked)}/>
          </div>
          <label style = {{display:'none'}} htmlFor = 'sort'>Sort</label>
        <Select
          isSearchable={false}
          className="select"
          options={options}
          value={sortType}
          onChange={setSortType}
          inputId = 'sort'
        />
      </div>
      <div className="home">
        {movies.filter((x)=>cageFilter ? x.cage === true : x).map((movie, i) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            date={movie.date}
            id={movie.id}
            ratings={movie.ratings}
            cage = {movie.cage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
