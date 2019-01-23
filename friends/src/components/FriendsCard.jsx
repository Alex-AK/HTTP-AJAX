import React from 'react';

const FriendsCard = props => {
  return (
    <div className="friend-card">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>email: {props.email}</p>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default FriendsCard;
