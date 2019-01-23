import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsContainer from './components/FriendsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Friends</h1>
        </nav>
        <FriendsContainer data={this.state.friends} />
      </div>
    );
  }
}

export default App;
