import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {modelInstance} from '../data/MovieModel';
import './MovieDetails.css';
import { Link } from 'react-router-dom';

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'INITIAL'
    }
  }

    componentDidMount = () => {
      modelInstance.addObserver(this)
      modelInstance.getMovie(this.props.hej.match.params.movieId).then(movie => {
        this.setState({
          status: 'LOADED',
          movie: movie
        })
      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      })
    }

    update(){
      this.setState({
      })
     
    }

    handleClick1(){
      modelInstance.addToMustSeeMovies(this.state.movie)
    }
    handleClick2(){
      modelInstance.addToWatchedMovies(this.state.movie)
    }


    render() {
   
    let movies = null;
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
      switch (this.state.status) {
      case 'INITIAL':
        movies = <em>Loading...</em>
        break;
      case 'LOADED':
      movies = <div>{this.state.movie.original_title}</div>
        break;
      default:
        movies = <b>Failed to load data, please try again</b>
        break;
    }

     return (
       <div className='container'>
        <div className='row'>
          <div className="col-md-5">
            <Link to="/search">
              <button>Search for more movies</button>
            </Link> 
          </div>
          {movies} 
          <div>
            <Link to="/search">
              <button onClick={this.handleClick1.bind(this)}>Add to my watch list</button>
              <button onClick={this.handleClick2.bind(this)}>Add to already watched movies</button>
            </Link>
          </div>
        </div >
        </div>
      );
    }
  }

  export default DishDetails; 