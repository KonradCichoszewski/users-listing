import React from 'react';

function User(props) {
  return (
    <div>
      <p>Name: {props.user.name}</p>
      <p>Last name: {props.user.lastName}</p>
      <p>Age: {props.user.age}</p>
    </div>
  )
}

export default User;