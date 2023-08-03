import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import { useCart } from "./context/CartContext";


function ProductCard() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const { addToCart } = useCart(); // Get the addToCart function from CartContext

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products based on the category
      const response = await axios.get(
        category === "All"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <h1 className="bg-warning mt-3 w-50 mx-auto p-3 border rounded">
        {category}
      </h1>
      <Row className="row p-4 justify-content-center">
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} className="col g-4" key={product.id}>
            <Card className="card">
              <div className="image-div">
                <Card.Img variant="top" src={product.image} alt={product.title} />
              </div>

              <div className="name-price">
                <p>{product.title}</p>
                <h5 className="price">${product.price}</h5>
              </div>
              <div>
                <p>{product.category}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => addToCart(product)} //? Call addToCart function on button click
                >
                  Add to Cart
                </button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductCard;
