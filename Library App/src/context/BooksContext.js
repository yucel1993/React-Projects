import { createContext, useContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
  //   const [query, setQuery] = useState("");
  //   const [selectType, setSelectType] = useState("all");
  const [searchInfo, setSearchInfo] = useState({
    query: "",
    selectType: "all",
  });
  const [myData, setMyData] = useState([]);

  const APP_KEY = process.env.REACT_APP_KEY;
  console.log(APP_KEY);

  const getData = async () => {
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInfo.query}&printType=${searchInfo.selectType}&key=${APP_KEY}`;
    try {
      const { data } = await axios(url);
      console.log(data);
      setMyData(data.items);
    } catch (error) {}
  };

  const values = { myData, setMyData, getData, searchInfo, setSearchInfo };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;
