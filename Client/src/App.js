import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListOfCatalogue from "./components/ListOfCatalogue";
import ProductCard from "./components/ProductCard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AdminPage from "./components/AdminPage";
import Cart from "./components/Cart";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />

        <Switch>
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/panier" component={Cart} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/catalogue" component={ListOfCatalogue} />
          <Route exact path="/productCard" component={ProductCard} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
