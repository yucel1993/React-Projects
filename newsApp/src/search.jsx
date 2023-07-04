import React, { useState, useEffect } from "react";

function Search({ searchText }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (searchText) {
      fetchNews(searchText);
    }
  }, [searchText]);

  const fetchNews = async (query) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=3a86dc7bdc254fb38cd93735d62d40d1&language=en`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const filteredArticles = articles.filter((article) => article.urlToImage);

  return (
    <div>
      <h2>Search Results:</h2>
      {filteredArticles.map((article, index) => (
        <div key={index}>
          <h3 style={{ fontSize: "1.2rem" }}>{article.title}</h3>
          {article.urlToImage && (
            <img src={article.urlToImage} alt="Article" />
          )}
          <p style={{ fontSize: "0.9rem" }}>{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            
            style={{ fontSize: "0.8rem" }}
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Search;
