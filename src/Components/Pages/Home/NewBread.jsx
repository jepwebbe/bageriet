import React from "react";
import { Link, Outlet } from "react-router-dom";
import useGetApiDataFromEnpoint from "../../../Hooks/useGetApiDataFromEnpoint";
import { BreadStyled, NewBreadStyled } from "../../../Styles/Bread.styled";
import { FaComments } from "react-icons/fa";

const NewBread = () => {
  const { state: bread } = useGetApiDataFromEnpoint("products", "items");

  return (
    <NewBreadStyled>
      <h2>Nyeste bagværk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae
        deleniti quibusdam necessitatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore vitae deleniti quibusdam
        necessitatibus
      </p>
      <BreadStyled>
        {bread
          .slice(-8, bread.length)
          .sort(() => Math.random() - 0.5)
          .map((item) => (
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
      <Outlet />
    </NewBreadStyled>
  );
};

export default NewBread;
