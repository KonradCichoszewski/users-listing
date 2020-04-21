import React from 'react';
import { Route } from 'react-router-dom';


import NavBar from './NavBar';
import UsersListing from './UsersListing';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        name: 'David',
        lastName: 'Scaffold',
        age: 32
      },
      {
        name: 'Ann',
        age: 23
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact path="/"
          render={(props) => <UsersListing {...props} users={this.state} />}
        />
        <Route path="/form" component={Form} />
      </div>
    );
  }
}

export default App;
