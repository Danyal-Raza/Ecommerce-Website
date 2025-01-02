import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import products from "../Data/Products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../CartContext";

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  const [searchResults, setSearchResults] = useState([]);
  const { cartMessage } = useCart();

  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = products.filter((product) =>
        product.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div style={{ backgroundColor: "#d9d9d9" }}>
      <Container className="py-5">
        <h2 className="text-center mb-4">Search Results for "{searchTerm}"</h2>
        {cartMessage && (
          <Alert variant="success" className="text-center">
            {cartMessage}
          </Alert>
        )}
        <Row className="justify-content-center">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
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
              <p>No results found. Try a different keyword.</p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SearchPage;
