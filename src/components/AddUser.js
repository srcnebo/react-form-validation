import React, { Component } from 'react';
import './AddUser.css';

const ErrorFeedback = props => <p className="error">{props.error}</p>;

const patterns = {
  firstName: /^[A-Za-z]{3,15}$/,
  lastName: /^[a-zA-Z]{3,15}$/,
  age: /^[0-9]{2,3}$/,
  email: /^[a-z]+[.]*[a-z]*@[a-z]+\.[a-z]{2,3}[.]?[a-z]{1,2}$/,
  bio: /^[a-zA-Z0-9]{5,400}$/
};
const errors = {
  firstName: 'First Name should be 3 to 15 letters long',
  lastName: 'Last Name should be 3 to 15 letters long.',
  age: 'Please please enter a valid age.',
  email: 'Please enter a valid email address.',
  gender: 'Please select gender'
};
class AddUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    agree: false,
    gender: '',
    age: '',
    skill: '',
    touched: {
      firstName: false,
      lastName: false,
      age: false,
      email: false
    },
    valid: true
  };
  handleChange = e => {
    // let target = e.target;
    // let name = target.name;
    // let value = target.type === 'checkbox' ? target.checked : target.value;

    this.validate(e.target);
    console.log('the className is', e.target.className);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleBlur = e => {
    let name = e.target.name;
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };
  handleSelectOption = e => {
    this.setState({
      gender: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state);
  };

  validate = e => {
    if (
      patterns.firstName.test(this.state.firstName) &&
      !this.state.touched.firstName
    ) {
      console.log('first name is valid');
      e.className = 'valid';
    } else {
      console.log('first name invalid');
      e.className = 'invalid';
    }
    if (!patterns.lastName.test(this.state.lastName)) {
      console.log('last name is invalid');
    }

    // for (const i in errors) {
    //   //console.log('i', errors[i]);
    //   if (errors[i].length === 0) {
    //     console.log('errors[i]', errors[i]);
    //   }
    //   //console.log(this.state.valid);
    // }
  };
  render() {
    //let { firstName, lastName, age, email } = this.state;
    //const errors = this.validate(firstName, lastName, age, email);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {/* <label>First Name:</label> */}
        <ErrorFeedback error={errors.firstName} />

        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {/* <label>Last Name:</label> */}
        <ErrorFeedback error={errors.lastName} />
        <br />
        <input
          type="text"
          name="age"
          value={this.state.age}
          placeholder="Your age"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <label>Age</label>
        <ErrorFeedback error={errors.age} />
        <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <label>Email</label>
        <ErrorFeedback error={errors.email} />
        <div className="gender">
          <p>Gender:</p>
          <div className="gender-options">
            <div>
              <label>Female</label>
              <input
                checked={this.state.gender === 'female'}
                type="radio"
                value="female"
                onChange={this.handleSelectOption}
              />
            </div>
            <div>
              <label>Male</label>
              <input
                checked={this.state.gender === 'male'}
                type="radio"
                value="male"
                onChange={this.handleSelectOption}
              />
            </div>
            <div>
              <label>Other</label>
              <input
                checked={this.state.gender === 'other'}
                type="radio"
                value="other"
                onChange={this.handleSelectOption}
              />
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing Elit, sed de elus
          enmod tempor incididunt ut labore et pain alien aliquot, sed ut.
        </p>
        <input
          type="checkbox"
          name="agree"
          value={this.state.agree}
          onChange={this.handleChange}
        />
        <label>I agree to terms and conditions</label>
        <br />
        <select
          name="skill"
          value={this.state.skill}
          onChange={this.handleChange}
        >
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
        </select>
        <br />
        <p>Leave message here: </p>
        <textarea
          className="message-text"
          rows="10"
          cols="60"
          name="messsage"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <br />

        <button>Submit</button>
      </form>
    );
  }
}

export default AddUser;
