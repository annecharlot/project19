import React, { Component } from 'react';
import './SearchMovie.css';
import Movies from '../Movies/Movies';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/MovieModel';

class SearchMovie extends Component {
  state = {
    filter: "Harry Potter"    
  }

  inputChange(inputEvent){
    modelInstance.setFilter(inputEvent.target.value)
  }

  handleChange(e){
    var filter = modelInstance.getFilter();
    this.setState({
      filter: filter
    })
  }

  render() {
    return (
      <div className='container-fluid'>
      <div className="row">
    {/*<Sidebar model={this.props.model}/>*/}
      <div className='col-md-9'>

      <div id='searchDiv'>
        <input id="keywordInput" type='text' placeholder='Enter your keywords' onChange={this.inputChange.bind(this)} style={{ width:"200px" }}/>
        <button id='selectButton'className='btn btn-warning' onClick={this.handleChange.bind(this)}>Search</button>
      </div>
      <div>
          <Movies filter={this.state.filter}/>
          <Link to="/movie_details"></Link>
      </div>
      </div>

      </div >
      </div>
    );
  }
}

export default SearchMovie;