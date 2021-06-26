import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
const Productdetail = ({ history, match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchproducts();
  }, [match]);

  const addtocartHandler = () => {
    history.push(`/cart/{$match.params.id}?`);
  };
  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-circle-left"></i>
        &nbsp; Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>Price :${product.price}</ListGroupItem>
            <ListGroupItem>Brand Name :{product.Brand}</ListGroupItem>
            <ListGroupItem>Description :{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={1}></Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>{product.countstock > 0 ? "In Stock" : "Out of Stock"}</Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button
              className="btn-block"
              type="button"
              onClick={addtocartHandler}
            >
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};
export default Productdetail;
