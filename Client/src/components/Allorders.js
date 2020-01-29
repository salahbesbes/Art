import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_all_orders } from "../Actions_art_wear/Cart_And_Order_Action";

const Allorders = ({ get_all_orders, orders }) => {
  useEffect(() => {
    get_all_orders();
  }, []);

  return (
    <div className="container-fluide bg-success">
      
      <ul className="p-3">
        {orders.map((el, i) => (
          <li key={i} className="p-3 row ">
            <span className="px-1 col-3"> {el.name} </span>
        <span className="px-1 col-3"> {el.email}</span>
            <span className="px-1 col-3">{el.status} </span>
            <span className="px-1 col d-flex">
              <button className="btn btn-danger m-auto ">delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapstatetoprops = state => {
  return { orders: state.order_Reducer };
};
export default connect(mapstatetoprops, { get_all_orders })(Allorders);
