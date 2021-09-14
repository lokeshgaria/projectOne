import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import brick1 from "../../Assets/product/brick1.jpg";
import brick2 from "../../Assets/product/brick2.jpg";

import "./Product.css";

function Product() {
  return (
    <div className="product">
      <Navbar />
      <div className="productBanner">
        <div className="productBanner__content">
          <h2>BRICKS</h2>
          <span>Home /Cluster /StoneStones</span>
        </div>
      </div>
      <div className="producListing">
        <Container className="productSelect">
          <Form.Select className="selectBox" aria-label="Default select example">
           
            <option value="1">16</option>
            <option value="2">23</option>
            <option value="3">43</option>
          </Form.Select>
        </Container>
        <div className="productRows ">
          <Container>
            <Row xs={1} md={4} lg={4}>
              <Col>
                <img src={brick1} alt="card1" className="img-fluid" />
                <h4>BGB BRICK</h4>
              </Col>
              <Col>
                <img src={brick2} alt="card1" className="img-fluid" />
                <h4>BRICK INDIANA</h4>
              </Col>
              <Col>
                <img src={brick1} alt="card1" className="img-fluid" />
                <h4>BRICK NATURALE</h4>
              </Col>
              <Col>
                <img src={brick2} alt="card1" className="img-fluid" />
                <h4>FS BRICK</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
