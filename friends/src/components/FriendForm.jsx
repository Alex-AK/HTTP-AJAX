import React from 'react';

const FriendsCard = props => {
  return (
    <form className="friend-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="nameInput"
        value={props.nameInput}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="ageInput"
        value={props.ageInput}
        onChange={props.handleChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="emailInput"
        value={props.emailInput}
        onChange={props.handleChange}
      />
      <button className="form-button button">Add</button>
    </form>
  );
};

export default FriendsCard;
