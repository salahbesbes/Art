import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { get_User } from "../Actions_art_wear/signAction";

class UserProfile extends React.Component {
  componentDidMount() {
    this.props.get_User();
  }
  render() {
    const user = { ...this.props.user }; // destructuring

    return (
      <div className="card text-center">
        <div className="card-header">
          {user["name"]}
          {/* {(this.props.user || {}).name}   nested obj niv2 */}
          {/* {(this.props.user || {}).name} || {}).jdfk   nested obj niv3*/}
        </div>
        <div className="card-body">
          <h5 className="card-title"> {user.email} </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}
const test = state => {
  return { user: state.sign_Reducer.user };
};

export default connect(test, { get_User })(UserProfile);
