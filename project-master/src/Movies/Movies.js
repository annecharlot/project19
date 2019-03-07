import React, {Component} from 'react';
import './Movies.css';
import {modelInstance} from '../data/MovieModel';
import { Link } from 'react-router-dom';
import { div } from 'reactstrap';
import Sidebar from "../Sidebar/Sidebar";
import Sidebar2 from "../Sidebar2/Sidebar2";


class Movies extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: 'INITIAL'
    }
  }

  update(filter) {
    this.setState({
      status: 'INITIAL'
    })
    modelInstance.getAllMovies(filter).then(movie => {
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
  
  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
      // when data is retrieved we update the state
      // this will cause the component to re-render
      this.update(this.props.filter);
    }

  componentWillReceiveProps(nextProps) {
  if(this.props.filter !== nextProps.filter)
  {
    this.update(nextProps.filter);
  }
} 


  render() {
    let movieList = null;
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        movieList = <em>Loading...</em>
        break;
      case 'LOADED':
        movieList = this.state.movie.map((movie_info) =>
        <div key={movie_info.id}>
          <h5>{movie_info.original_title}</h5>
          <Link to={"/movie_details/" +movie_info.id}>
            <img alt=""src={"https://image.tmdb.org/t/p/w500"+ movie_info.poster_path}></img>
          </Link>
          {console.log(movie_info.known_for)}
          {/*{movie_info.known_for.map((item) => <div>{item.original_title}</div>)}*/}
          </div> 
        )
        break;
      default:
        movieList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className='col-md-8'>
      <Sidebar model={this.props.model} />
      <Sidebar2 model={this.props.model} />

        <ul class="movielist">
          <h2>{movieList}</h2>
        </ul>
      </div>
    );
  }
}


export default Movies;
