import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Actions_art_wear/Cart_And_Order_Action";

const ProductCard = ({ product, addToCart }) => {
  /* ***********  Local State To handel Shopping Card  ***************** */
  const [CardData, setCardData] = useState({
    qte: 0
  });
  const { qte } = CardData;

  const onchange = e => setCardData({ ...CardData, qte: e.target.value });

  return (
    <div className="card mx-auto my-2" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="..." className="btn btn-primary">
          Go somewhere
        </a>

        <button
          className=" m-1 btn btn-success"
          onClick={qte > 0 ? () => addToCart({ ...product, qte }) : () => {}} // we are adding the qte to the payload
        >
          ajouter au panier
        </button>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() =>
              setCardData(
                qte > 1
                  ? { ...CardData, qte: qte - 1 }
                  : { ...CardData, qte: 1 }
              )
            }
            type="button"
            className="btn btn-secondary"
          >
            -
          </button>
          <input
            onChange={onchange}
            value={qte}
            type="text"
            className="btn btn-secondary"
          />

          <button
            onClick={() => setCardData({ ...CardData, qte: qte + 1 })}
            type="button"
            className="btn btn-secondary"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
const mapstatetoprops = state => {
  return {
    commande: state.panier_Reducer // state take the name of the file of reducer
  };
};
export default connect(mapstatetoprops, { addToCart })(ProductCard);
