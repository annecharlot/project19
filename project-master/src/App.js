import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/MovieModel'
import SearchMovies from "./SearchMovie/SearchMovie";
import MyDiary from "./MyDiary/MyDiary";
import MovieDetails from "./MovieDetails/MovieDetails"
import { Link } from 'react-router-dom';


class App extends Component {
  static propTypes = {
};
    
  constructor(props) {
    super(props);

    this.state = {
      title: 'Movie Diary',
      watchedMovies: modelInstance.getAllWatchedMovies(),
      mustSeeMovies: modelInstance.getAllMustSeeMovies()
      };
    }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <Link to="/">
          <h1 id='title' className="App-title">{this.state.title}</h1>
        </Link>
        </header>
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={() => <SearchMovies model={modelInstance}/>}/>
          <Route path="/movie_details/:movieId" render={(props) => <MovieDetails hej={props} model={modelInstance}/>}/>
          <Route path="/my_diary" render={() => <MyDiary model={modelInstance}/>}/>
        
      </div>
    );
    };
  }

export default App;
