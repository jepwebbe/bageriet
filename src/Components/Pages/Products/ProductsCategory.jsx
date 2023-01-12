import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BreadStyled } from "../../../Styles/Bread.styled";
import appService from "../../App/Appservices/AppService";
// Item not finished, work in progress
const ProductsCategory = () => {
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await appService.GetDetails("categories", id);
        setCategories(result.data.item.products);
        console.log(result.data.item.products)
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, [id]);

  return (
    <BreadStyled>
      {categories && categories.map((item) => (
        <article key={item.id}>
          <img src={item.image.fullpath} alt={`Et billede af ${item.title}`} />
          <div>
            <p>{item.num_comments}</p>
            {/*           <FaComments />
             */}{" "}
          </div>
          <h3>{item.title.toUpperCase()}</h3>
          <p>{item.teaser.substring(0, 100)}</p>
          <button>
            <Link to={"/produkt/" + item.id}>SE MERE</Link>
          </button>
        </article>
      ))}
    </BreadStyled>
  );
};

export default ProductsCategory;
