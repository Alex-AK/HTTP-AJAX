import React from 'react';

const FriendsForm = props => {
  return (
    <form className="friend-form" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="Name"
        name="nameInput"
        value={props.nameInput}
        onChange={props.handleChange}
        required
        minLength="3"
      />
      <input
        type="number"
        placeholder="Age"
        name="ageInput"
        value={props.ageInput}
        onChange={props.handleChange}
        required
        minLength="1"
      />
      <input
        type="text"
        placeholder="Email"
        name="emailInput"
        value={props.emailInput}
        onChange={props.handleChange}
        required
        minLength="5"
      />
      <button className="form-button button" onClick={props.handleSubmit}>
        {props.isUpdating ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default FriendsForm;
