import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      age: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case 'name': this.setState({ name: event.target.value }); break;
      case 'lastName': this.setState({ lastName: event.target.value }); break;
      case 'age': this.setState({ age: event.target.value }); break;
      default: console.log('Error');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.formSubmit(this.state);
    this.setState({
      name: '',
      lastName: '',
      age: ''
    });
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label> Last name:
          <input type="text" name="lastName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label> Age:
          <input type="text" name="age" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add user" />
      </form>
    );
  }
}

export default Form;