import React from 'react';

function User(props) {
  return (
    <div className='userTile'>
      <p>Name: {props.user.name}</p>
      <p>Last name: {props.user.lastName}</p>
      <p>Age: {props.user.age}</p>
      <p>Department: {props.user.department}</p>
    </div>
  )
}

export default User;