import React, { Component } from 'react';
import './Sidebar.css';
import { modelInstance } from '../data/MovieModel';

class Sidebar extends Component {

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
    modelInstance.removeFromMustSeeMovies(movie)
  }


  render() {
    return (
      <div className="Sidebar">
        <h3>Must-See-Movie-List</h3>
        
        <div>
          {modelInstance.getAllMustSeeMovies().map(movie => 
            <p>{movie.original_title}
              <button onClick={() => this.removeMovie(movie)}>-</button>
              </p>
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


export default Sidebar;
