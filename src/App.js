import React from 'react';
import { Route } from 'react-router-dom';


import NavBar from './NavBar';
import UsersListing from './UsersListing';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this)
    this.state = {
      users: [
        {
          name: 'David',
          lastName: 'Scaffold',
          age: 32
        }
      ]
    }
  }

  formSubmit(user) {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route
          exact path="/"
          render={(props) => <UsersListing {...props}
            users={this.state.users} />}
        />
        <Route
          path="/form"
          render={(props) => <Form {...props}
            formSubmit={this.formSubmit} />}
        />
      </div>
    );
  }
}

export default App;
