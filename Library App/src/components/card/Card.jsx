import React from "react";
import { CardButton, CardContainer, CardHeader, CardMedia } from "./Card.style";
import defaultImg from "../../assets/book.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const { volumeInfo } = item;
  const navigate = useNavigate();
  return (
    <CardContainer>
      <CardHeader>{volumeInfo?.title}</CardHeader>
      <CardMedia
        src={volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
        alt={volumeInfo?.title}
        title={volumeInfo?.title}
      />

      <CardButton
        onClick={() => navigate(`/detail/${item.id}`, { state: item })}>
        View More
      </CardButton>
    </CardContainer>
  );
};

export default Card;
