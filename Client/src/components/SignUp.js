import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Css/App.css";
import { register } from "../Actions_art_wear/signAction";

const SignUp = ({ register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    register({ name, email, password });
  };
  const { name, email, password, password2 } = formData;
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            // required
          />
        </div>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={email}
            autoComplete="email"
            type="email"
            placeholder="Email Address"
            name="email"
          />

          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={password}
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            name="password"
            // minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={password2}
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            name="password2"
            // minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </Fragment>
  );
};
SignUp.prototype = {
  // setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(null, { register })(SignUp);
