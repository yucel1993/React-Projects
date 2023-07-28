import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

import axios from "axios";

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [detailData, setDetailData] = useState("");

  console.log(state);
  const APP_KEY = process.env.REACT_APP_KEY;
  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${APP_KEY}`;

  const getDetailData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setDetailData(data);
    } catch (error) {}
  };
  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{state.volumeInfo.title}</DetailTitle>
        <DetailImg>
          <img
            src={state.volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
            alt=""
          />
        </DetailImg>
        <Description>{state.volumeInfo.description}</Description>
        <InfoPart>
          <p>{state.volumeInfo.authors.join(" - ")}</p>
          <p>
            {state.volumeInfo.publishedDate} / {state.volumeInfo?.publisher}
          </p>
        </InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
