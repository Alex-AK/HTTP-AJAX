import React from 'react';

const FriendsCard = props => {
  return (
    <form className="friend-form" onSubmit={e => e.preventDefault()}>
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
      <button className="form-button button" onClick={props.handleSubmit}>
        Add
      </button>
      <button className="form-button button" onClick={props.handleUpdate}>
        Update
      </button>
    </form>
  );
};

export default FriendsCard;
