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
      name: 'input',
      nameInput: '',
      ageInput: '',
      emailInput: '',
      id: null
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('button clicked');
    axios
      .post(`http://localhost:5000/friends`, {
        name: this.state.nameInput,
        age: this.state.ageInput,
        email: this.state.emailInput
      })
      .then(res =>
        this.setState({
          friends: res.data,
          nameInput: '',
          ageInput: '',
          emailInput: ''
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = id => {
    // console.log(id);
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  handleUpdate = id => {
    console.log(id);
    id = id - 1;
    axios.get(`http://localhost:5000/friends`).then(res => {
      console.log(res.data[id]);
      this.setState({
        nameInput: res.data[id].name,
        ageInput: res.data[id].age,
        emailInput: res.data[id].email
      });
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Friends</h1>
        </nav>
        <FriendForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          nameInput={this.state.nameInput}
          ageInput={this.state.ageInput}
          emailInput={this.state.emailInput}
        />
        <FriendsContainer
          data={this.state.friends}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
