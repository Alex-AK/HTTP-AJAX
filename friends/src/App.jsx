import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import FriendsContainer from './components/FriendsContainer';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      value: '',
      nameInput: '',
      ageInput: '',
      emailInput: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {};

  handleSubmit = e => {
    e.preventDefault();
    console.log('button clicked');
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Friends</h1>
        </nav>
        <FriendForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSubmit}
        />
        <FriendsContainer
          data={this.state.friends}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
