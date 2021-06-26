import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Productdisplay from "./productdisplay";
// import Loader from "../components/shared/loader";
// import Message from "../components/shared/Message";

const Homedesign = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products`);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={3}>
            <Productdisplay product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Homedesign;
