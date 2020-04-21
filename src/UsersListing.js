import React from 'react';
import User from './User';

function UsersListing(props) {
  return (
    <div>
      {props.users.map(user => <User user={user} />)}
    </div>
  )
}

export default UsersListing;