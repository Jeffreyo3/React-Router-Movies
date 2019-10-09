import React, { useState } from 'react';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

import SavedList from './Movies/SavedList.js';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path={"/movies/:id"} render={(props) => {
        return <Movie {...props} />
      }} />
    </div>
  );
};

export default App;
