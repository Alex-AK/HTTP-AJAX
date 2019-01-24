import React from 'react';

const FriendsCard = props => {
  return (
    <form className="friend-form" onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Name" onChange={props.handleChange} />
      <input type="text" placeholder="Age" onChange={props.handleChange} />
      <input type="text" placeholder="Email" onChange={props.handleChange} />
      <button className="form-button button">Add</button>
    </form>
  );
};

export default FriendsCard;
