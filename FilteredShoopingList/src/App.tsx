import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Item from "./helper/functions";
import Filter from './components/Filter';
import Product from './components/Product';

export default function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    name: '',
    category: '',
    brand: '',
    sort: '',
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setData(data?.products);
        setFilteredProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  // Function to filter products by name and category
 useEffect(() => {
  const filteredByName = filterDataByName(data, info);
  const filteredByCategory = filterDataByCategory(filteredByName, info);
  const filteredByBrand = filterDataByBrand(filteredByCategory, info);
  const sortedProducts = sortProducts(filteredByBrand, info.sort);
  setFilteredProducts(sortedProducts);
}, [data, info]);

const sortProducts = (products, sortOption) => {
  let sortedProducts = [...products];

  if (sortOption === 'PriceLowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'PriceHighToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'RatingHighToLow') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return sortedProducts;
};

const filterDataByBrand = (products, info) => {
  // Convert the brand and product.brand to lowercase for case-insensitive matching
  const brandToMatch = info.brand.toLowerCase();

  return products.filter((product) => {
    const productBrand = product.brand.toLowerCase();
    return productBrand.includes(brandToMatch);
  });
}

function filterDataByName(data, info) {
  //? Convert the name and title to lowercase for case-insensitive matching
  const nameToMatch = info.name.toLowerCase();

  return data.filter((product) => {
    const title = product.title.toLowerCase();
    const brand = product.brand.toLowerCase();

    // Check if either the title or brand includes the search term
    return title.includes(nameToMatch) || brand.includes(nameToMatch);
  });
}

  const filterDataByCategory = (products, info) => {
    if (!info.category || info.category === 'All') {
      return products; // Return all products if no category is selected
    }

    return products.filter((product) => {
      return product.category === info.category;
    });
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Item sx={{ backgroundColor: "whiteSmoke" }}>
            <Filter data={data} info={info} setInfo={setInfo} />
          </Item>
        </Grid>
        {filteredProducts?.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </Grid>
    </>
  );
}
