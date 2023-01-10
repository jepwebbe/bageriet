import React from "react";

const ProductsCategory = ({ filterItem, setItem, categories }) => {

  return (
    <>
      <div className="d-flex justify-content-center">
        {categories.map((Val, id) => {
          return (
            <button
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          onClick={() => setItem(categories)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default ProductsCategory;
