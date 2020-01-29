import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_all_Users, delete_User } from "../Actions_art_wear/signAction";

const Allusers = ({ get_all_Users, users = [], delete_User }) => {
  useEffect(() => {
    get_all_Users();
  }, []);

  {
    /* {(this.props.user || {}).name} || {}).jdfk   nested obj niv3*/
  }

  return (
    <div className="container-fluide bg-info">
      <ul className="p-3">
        {users.map((el, i) => (
          <li key={i} className="p-3 row ">
            <span className="px-1 col-3">{el.name}</span>{" "}
            <span className="px-1 col-3">{el.email}</span>{" "}
            <span className="px-1 col-3">{el._id}</span>
            <span className="px-1 col d-flex">
              <button
                className="btn btn-danger m-auto "
                onClick={() => {
                  delete_User(el._id);
                  console.log("object");
                }}
              >
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapstatetoprops = state => {
  return {
    users: state.sign_Reducer.users
  };
};
export default connect(mapstatetoprops, { get_all_Users, delete_User })(
  Allusers
);
