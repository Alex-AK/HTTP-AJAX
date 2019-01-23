import React from 'react';

const FriendsCard = props => {
  return (
    <div className="friend-card">
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Email" />
        <button className="button">Add</button>
      </form>
    </div>
  );
};

export default FriendsCard;
