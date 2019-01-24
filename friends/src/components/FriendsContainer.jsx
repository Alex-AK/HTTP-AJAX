import React from 'react';
import FriendsCard from './FriendsCard';
import './Friends.css';

const FriendsContainer = props => {
  const mappedCards = props.data.map(friend => (
    <FriendsCard
      name={friend.name}
      age={friend.age}
      email={friend.email}
      key={friend.id}
      id={friend.id}
      handleDelete={props.handleDelete}
    />
  ));

  return <div className="friend-cards">{mappedCards}</div>;
};

export default FriendsContainer;
