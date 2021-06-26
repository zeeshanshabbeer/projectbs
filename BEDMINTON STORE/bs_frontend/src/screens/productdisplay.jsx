import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Productdisplay = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} varient="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <strong>Brand :{product.Brand}</strong>
          </Card.Text>
          <Card.Text as="div">
            <strong>PRICE: Rs{product.price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Productdisplay;
