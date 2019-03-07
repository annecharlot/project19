import React, { Component } from 'react';
import '../Sidebar/Sidebar.css';
import { modelInstance } from '../data/MovieModel';

class Sidebar2 extends Component {

  constructor(props) {
    super(props)
    this.update = this.update.bind(this);
    this.state = {
    }

  }

  componentDidMount = () => {
    modelInstance.addObserver(this)
    this.setState({
    })
  }

  update = (changeDetails) =>{
    this.setState({
    })
  }

  removeMovie = (movie) => {
    modelInstance.removeFromWatchedMovies(movie)
  }


  render() {
    return (
      <div className="Sidebar2">
        <h3>Watched-Movies-List</h3>
        
        <div>
          {modelInstance.getAllWatchedMovies().map(movie => 
            <p>{movie.original_title}
              <button onClick={() => this.removeMovie(movie)}>-</button></p>
            )}
          </div>
        {/*<Link to="/dinneroverview">*/}
        <p>
            <button>Lists</button>
        </p>
          
        {/*</Link>*/}
      </div>
    );
  }
}


export default Sidebar2;
