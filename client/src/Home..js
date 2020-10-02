import React, { Fragment } from 'react';
import Navbar from './components/Navbar'
import BoxProducts from './containers/RepoBox'
import SearchForm from './containers/SearchForm'
import './App.css';


function App() {
  return (
    <Fragment >
      <Navbar />
      <SearchForm />
      <BoxProducts />
    </Fragment>
  );
}

export default App;
