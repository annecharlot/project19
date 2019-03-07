import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class MyDiary extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
    }

  }  
  render() {
    return (
      <div className="MyDiary">
        <h2> My Diary</h2>  

        <Link to="/search">
          <button>Search for more movies</button>
        </Link> 
      </div>
    );
  }
}

export default MyDiary;