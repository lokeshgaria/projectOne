import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 

import Product1 from "../../Assets/product/productimages/pr1.jpg"
import Product2 from "../../Assets/product/productimages/pr2.jpg"
import Product3 from "../../Assets/product/productimages/pr3.jpg"
import Product4 from "../../Assets/product/productimages/pr4.jpg"
import Product5 from "../../Assets/product/productimages/pr5.jpg"
 
import Product7 from "../../Assets/product/productimages/pr7.jpg"
import Product8 from "../../Assets/product/productimages/pr8.jpg"
import Product9 from "../../Assets/product/productimages/pr9.jpg"
import Product10 from "../../Assets/product/productimages/pr10.jpg"
 
import Product12 from "../../Assets/product/productimages/pr12.jpg"
import Product13 from "../../Assets/product/productimages/pr14.jpg"

import "./Product.css";


const product = [
  {
    img : Product1
  },
  {
    img : Product2
  },
  {
    img : Product3
  },
  {
    img : Product4
  }
  ,
  {
    img : Product5
  },{
    img : Product7
  },{
    img : Product8
  },{
    img : Product9
  },{
    img : Product10
  } ,{
    img : Product12
  },{
    img : Product13
  }
]
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
              {
                product.map((values,index) => {
                  return (
                    <Col style={{margin : "1rem 0"}}>
                    <img key={index} src={values.img} alt="card1" className="product_img" />
                    {/* <h4>BGB BRICK</h4> */}
                  </Col>
                  )
                })
              }
            
             
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
