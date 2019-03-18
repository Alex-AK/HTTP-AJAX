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
      id: null,
      isUpdating: false
    };
  }

  componentDidMount() {
    axios
      .get('/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    if (this.state.isUpdating) {
      axios
        .put(`/friends/${this.state.id}`, {
          name: this.state.nameInput,
          age: this.state.ageInput,
          email: this.state.emailInput
        })
        .then(res => {
          this.setState({
            friends: res.data,
            nameInput: '',
            ageInput: '',
            emailInput: '',
            isUpdating: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post(`/friends`, {
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
    }
  };

  populateForm = id => {
    const selected = this.state.friends.find(friend => friend.id === id);
    this.setState({
      nameInput: selected.name,
      ageInput: selected.age,
      emailInput: selected.email,
      id: selected.id,
      isUpdating: true
    });
  };

  handleDelete = id => {
    axios
      .delete(`/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
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
          isUpdating={this.state.isUpdating}
        />
        <FriendsContainer
          data={this.state.friends}
          handleDelete={this.handleDelete}
          populateForm={this.populateForm}
        />
      </div>
    );
  }
}

export default App;
