import React from 'react';

const FriendsCard = props => {
  return (
    <div className="friend-card">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <div className="buttons">
        <button className="button">Edit</button>
        <button className="button" onClick={() => props.handleDelete(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendsCard;
