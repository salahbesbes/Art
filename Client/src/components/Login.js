import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Log_in } from "../Actions_art_wear/signAction";

const Login = ({ Log_in }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    Log_in({ email, password });
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            onChange={e => onchange(e)}
            value={email}
            autoComplete="email"
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <div className="form-group">
            <input
              onChange={e => onchange(e)}
              value={password}
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Dont have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Fragment>
  );
};
Login.propTypes = { Log_in: PropTypes.func.isRequired };

export default connect(null, { Log_in })(Login);
