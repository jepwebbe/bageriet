import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { BreadStyled } from "../../../Styles/Bread.styled";
import { FaComments } from "react-icons/fa";
import { ProductsStyled } from "./Products.Styled";
import { Page } from "../../App/Layout/Page";

const Products = () => {
  const { state: allBread } = useGetApiDataFromEnpoint("products", "items");
  const { state: categories } = useGetApiDataFromEnpoint("categories", "items");

  // Hook that rerenders when a click event is heard and rerenders the currentURL (co-authored by ChatGPT)
  // If a click has lead to a change in the url, the currentUrl state changes which causes a re render of the component
  const [currentURL, setCurrentURL] = useState(window.location.href);
  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentURL(window.location.href);
    };
    window.addEventListener("click", handleUrlChange);
    return () => {
      // clean up function
      window.removeEventListener("click", handleUrlChange);
    };
  }, []);
  const endUrl = currentURL.substring(currentURL.lastIndexOf("/") + 1);

  return (
    <Page
      title="Bageriet: Vores elskede bagværk"
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
                <button>
                  <Link to={"/produkter/" + category.id}>{category.title}</Link>
                </button>
              </li>
            ))}
          </ul>
          {endUrl !== "produkter" ? (
            <Outlet />
          ) : (
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
                    <Link to={"/produkt/" + item.id}>SE MERE</Link>
                  </button>
                </article>
              ))}
            </BreadStyled>
          )}
        </div>
      </ProductsStyled>
    </Page>
  );
};

export default Products;
