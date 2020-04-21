import React from 'react';
import User from './User';

function UsersListing(props) {
  return (
    <div>
      {props.users.map(user => <User user={user} key={user.name} />)}
    </div>
  )
}

export default UsersListing;