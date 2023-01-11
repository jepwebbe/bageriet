import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import appService from "../../App/Appservices/AppService";
import { NewsStyled } from "../Home/News.Styled";
import { StyledNewsPageDetails } from "./NewsPageDetailsStyled";

export const NewsPageDetails = () => {
  const [newsStory, setNewsStory] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await appService.GetDetails("news", id);
        setNewsStory(result.data.item);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <StyledNewsPageDetails>
      {newsStory && (
        <div>
          <h2>{newsStory.title}</h2>
          <img src={newsStory.image} alt={`Billede af ${newsStory.title}`} />
            <p>{newsStory.teaser}</p>
            <p>{newsStory.content}</p>
            <Link to="/nyheder">Læs flere nyheder</Link>
        </div>
      )}
    </StyledNewsPageDetails>
  );
};
