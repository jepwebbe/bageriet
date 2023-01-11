import React from "react";
import { Link, Outlet } from "react-router-dom";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { BreadStyled } from "../../../Styles/Bread.styled";
import { FaComments } from "react-icons/fa";
import { ProductsStyled } from "./Products.Styled";
import { Page } from "../../App/Layout/Page";

const Products = () => {
  const { state: allBread } = useGetApiDataFromEnpoint("products", "items");
  const { state: categories } = useGetApiDataFromEnpoint("categories", "items");

  /*   const filterCategory = (curcat) => {
    const categoryFilter = allBread.filter((newVal) => {
      return newVal.category_id === curcat
    })
    console.log("dette er curcat", curcat)
    setItem(newItem)
  } */
  return (
    <Page
      title="Vores elskede bagværk"
      description="Her kan du se alle vores dejlige produkter"
    >
      <ProductsStyled>
        <h2>Vores elskede bagværk</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
          dolorum eius aliquid quisquam dicta labore
        </p>
        <div className="breadWrap">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <button /* onClick={() => filterCategory(category)} */>
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
          <BreadStyled>
            {allBread.map((item) => (
              <article key={item.id}>
                <img
                  src={item.image.fullpath}
                  alt={`Et billede af ${item.title}`}
                />
                <div>
                  <p>{item.num_comments}</p>
                  <FaComments />
                </div>
                <h3>{item.title.toUpperCase()}</h3>
                <p>{item.teaser.substring(0, 100)}</p>
                <button>
                  <Link to={item.id}>SE MERE</Link>
                </button>
              </article>
            ))}
          </BreadStyled>
        </div>
      </ProductsStyled>

    </Page>
  );
};

export default Products;
