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
  // SEARCH COMPONENT
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // function that handles change whenever something is typed in the search field, can also be used for instant search
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // function that handles submission of form, clicking search button
  const handleSubmit = (e) => {
    e.preventDefault();
    // filter allBread array to find items that match searchTerm
    const results = allBread.filter((item) =>
     // Compares the title of every item in allBread with the searchTerm
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

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
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Søg efter dit yndlingsbrød"
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">Søg</button> 
            <BreadStyled>
              {searchResults.map((item) => (
                <article key={item.id}>
                  <img src={item.image.fullpath} alt={`Et billede af ${item.title}`} />
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
          </form>
          )}
        </div>
      </ProductsStyled>
    </Page>
  );
};

export default Products;
