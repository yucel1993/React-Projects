// import axios from "axios";
// import { useEffect, useState } from "react";

// function ProductCard({ selectedCategory }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = () => {
//       axios("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
//     };

//     const getProductsByCategory = () => {
//       axios(`https://fakestoreapi.com/products/category/${selectedCategory}`)
//         .then((res) => setProducts(res.data))
//         .catch((err) => console.log(err));
//         //   getProducts();
//     };

//     if (selectedCategory === "All") {
//       getProducts();

//     } else {
//       getProductsByCategory();
//     }
//   }, [selectedCategory]);

//   return (
//     <div>
//       <h1>{selectedCategory}</h1>
//       {products.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <img src={product.image} alt={product.title} />
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <p>Rating: {product.rating.rate}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductCard;

// ! under there is useparams above usestate,lifting State version

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row,Col,Card } from "react-bootstrap";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      if (category === "All") {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } else {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(response.data);
      }
    };

    fetchProducts();
  }, [category]);
  return (
    <>
      <h1 className="bg-warning mt-3 w-50 mx-auto p-3 border rounded">{category}</h1>
      <Row className="p-4 justify-content-center">
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} className="col" key={product.id}>
           
              <Card className="card">
                <Card.Img variant="top" src={product.image} alt={product.title} />
                <div className="price">${product.price}</div>
                <p>{product.title}</p>
              </Card>
          
          </Col>
        ))}
      </Row>
    </>
  );
        } 

export default ProductCard;


