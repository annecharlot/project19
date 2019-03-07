import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p id="welcome_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <Link to="/search">
            <button className='center'>Start your movie bucket list</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
