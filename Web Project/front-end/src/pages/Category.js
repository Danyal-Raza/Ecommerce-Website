import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useParams} from "react-router-dom";
import products from "../Data/Products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../CartContext";

const CategoryPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { cartMessage } = useCart();

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    setCategoryProducts(filteredProducts);
  }, [category]);

  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <Container className="py-5">
        <h2 className="text-center mb-4">{category} Products</h2>
        {cartMessage && (
          <Alert variant="success" className="text-center">
            {cartMessage}
          </Alert>
        )}

        <Row className="justify-content-center">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="d-flex justify-content-center"
              >
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center">
              <p>No products found in this category.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
