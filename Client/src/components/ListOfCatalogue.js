import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import { searchAll } from "../Actions_art_wear/searchAction";

const ListOfCatalogue = ({ products = [], searchAll }) => {
  useEffect(() => {
    searchAll();
  }, []);

  return (
    <div className=" container">
      <div className="row">
        {products.map((el, i) => (
          <ProductCard product={el} key={i} />
        ))}
      </div>
    </div>
  );
};
const mapstatetoprops = (state) => {
  return {
    products: state.search_Reducer // state take the name of the file of reducer
  };
};

export default connect(mapstatetoprops, { searchAll })(ListOfCatalogue);
