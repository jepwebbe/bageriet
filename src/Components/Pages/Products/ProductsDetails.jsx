import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import appService from "../../App/Appservices/AppService";
import { Page } from "../../App/Layout/Page";
import Comments from "../../Comments/Comments";
import { StyledProductsDetails } from "./ProductsDetails.Styled";

export const ProductDetails = () => {
  const [breadData, setBreadData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("products", id);
        setBreadData(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Page
      title={`Bageriet: ${breadData.title}`}
      description={`En side med opskrifter på ${breadData.title}`}
    >
      <StyledProductsDetails>
        <h2>{breadData && breadData.title.toUpperCase()}</h2>
        <p>{breadData.category}</p>
        <button>LIKE</button>
        <div>
          <div>
            <img
              src={breadData && breadData.image.fullpath}
              alt={`Et billede af ${breadData.title}`}
            />
            <p>{breadData.teaser + " " + breadData.description}</p>
          </div>
          <div className="ingredients">
            <h3>Ingredienser</h3>
            <ul>
              {breadData &&
                breadData.ingredients.map((item, key) => (
                  <li key={key}>
                    {item.amount + item.unit_abbr + " " + item.ingredient_title}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <Comments postID={id} />
      </StyledProductsDetails>
    </Page>
  );
};
