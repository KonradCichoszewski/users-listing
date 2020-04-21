import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
  }

  getInitialState = () => ({
    name: '',
    lastName: '',
    age: '',
    department: ''
  })

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`https://5e9f5b6e11b078001679c795.mockapi.io/users`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    this.props.formSubmit(this.state);
    this.setState(this.getInitialState());
    event.target.reset();
    alert("User added!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className='label'> Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label><br />
        <label> Last name:
          <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
        </label><br />
        <label> Age:
          <input type="text" name="age" value={this.state.value} onChange={this.handleChange} />
        </label><br />
        <label>
          Choose your department:
          <select name="department" value={this.state.department} onChange={this.handleChange}>
            <option value="IT">IT</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Management">Management</option>
            <option value="Public Relations">Public Relations</option>
          </select>
        </label><br />
        <input type="submit" value="Add user" />
      </form>
    );
  }
}

export default Form;