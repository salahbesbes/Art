import React from "react";
import { connect } from "react-redux";
import { add_Commande_To_Db } from "../Actions_art_wear/Cart_And_Order_Action";

const Cart = ({ commande, add_Commande_To_Db }) => {
  return (
    <section className="shopping-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-table">
              {commande.length === 0 ? (
                <div className="bg-danger"> No Article Added</div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="p-name">Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>
                        <i className="ti-close"></i>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {commande.map((el, i) => (
                      <tr key={i}>
                        <td className="cart-pic first-row"></td>
                        <td className="cart-title first-row">
                          <h5>{el.name}</h5>
                        </td>
                        <td className="p-price first-row">{el.price}</td>
                        <td className="qua-col first-row">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span type="text">{el.qte}</span>
                            </div>
                          </div>
                        </td>
                        <td className="total-price first-row">
                          {el.price * el.qte}
                        </td>
                        <td className="close-td first-row">
                          <i className="ti-close"></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <button
                className="btn btn-success"
                onClick={
                  commande.length !== 0
                    ? () => add_Commande_To_Db(commande)
                    : null
                }
              >
                confirmer la commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapstatetoprops = state => {
  return {
    commande: state.panier_Reducer // state take the name of the file of reducer
  };
};
export default connect(mapstatetoprops, { add_Commande_To_Db })(Cart);
