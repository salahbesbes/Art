import React from "react";
import { Link } from "react-router-dom";
import "../Css/App.css";
import { LogOut } from "../Actions_art_wear/signAction";
import { connect } from "react-redux";
const Navbar = ({ LogOut, commande }) => {
  // rfce
  return (
    <nav className="navbar bg-dark">
      <h1>
        <input type="text" placeholder="search" className=" mr-3 " />
        <span className=" ml-3 ">{/* calculating of total number of articles sent to the state */}
          {commande.map(el => el.qte).reduce((a, b) => a + b, 0)} {" "} 
          articles au panier
        </span>

        <select type="Select" placeholder="select" className=" form-control">
          <option value="All">All</option>
          <option value="cole V">cole V</option>
          <option value="Cole rond">Cole rond</option>
          <option value="Polo">Polo</option>
        </select>
      </h1>
      <ul>
        <li>
          <Link to="/signin" title="login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/signin" title="login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Login</span>
          </Link>
        </li>
        <li>
          <Link to="/panier" title="login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm"> Pannier</span>
          </Link>
        </li>
        <li>
          <Link to="/admin" title="login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">All Users</span>
          </Link>
        </li>
        <li>
          <Link to="userprofile">Profile one user</Link>
        </li>
        <li>
          <Link to="catalogue">Catalogue</Link>
        </li>
        <li>
          |
          <Link to="/signup" title="register">
            <i className="fas fa-user"></i>
            <span className="hide-sm">Register</span>
          </Link>
        </li>
        <li>
          <Link to="/signin" title="login">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Login</span>
          </Link>
        </li>

        <li>
          <Link to="/" title="Deconnect" onClick={LogOut}>
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Deconnect</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const mapstatetoprops = state => {
  return {
    commande: state.panier_Reducer // state take the name of the file of reducer
  };
};
export default connect(mapstatetoprops, { LogOut })(Navbar);
