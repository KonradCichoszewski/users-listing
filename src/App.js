import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import NavBar from './NavBar';
import UsersListing from './UsersListing';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://5e9f5b6e11b078001679c795.mockapi.io/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
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
