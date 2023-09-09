import React from 'react';
import { useHistory } from "react-router-dom";
import { Helmet } from 'react-helmet';
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { CardBody } from "reactstrap";  



function Dashboard() {
 
return  (


        <>
     <div className="text" title="IMISSEDSHOPPING GOT TALENTS">
     <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023.png")} className="rounded mx-auto d-block" 
     height={200}
     width={400}
     alt="i missed shopping">

     </img>
  <text > 
    <h2 className="text-center" >
       IMISSED SHOPPING </h2>
    <p> <h4 className="text-center"></h4></p>
    </text>
 </div>
     
      <Container fluid>
      <Row>
          <Col md="6">
          <Card>
          <div>
              <img src={ require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(15).png")}height={300}
     width={600} alt="affordable products and services" ></img>
          </div>
              </Card>
              <Card.Body> <h3>MAKING PRODUCTS AND SERVICES AFFORDABLE</h3></Card.Body>

          </Col>
          
          
          <Col md="6">
            <Card>
              <div>
               <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(16).png")}
               height={300}
               width={600}
                alt="quality products and services "></img>
                </div>
              
            </Card>
            <Card.Body> <h3>MAKING SURE YOU GET QUALITY PRODUCTS AND SERVICES</h3></Card.Body>
          </Col>
        
        
          <Col md="6">
            <Card>
             <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(17).png")}
                 height={300}
                 width={600} 
                 alt='market consultant'>
                 
                 </img>
              </Card>
              <Card.Body> <h3>CONSULT US TO MAKE ANY MARKET ENQUIRY ABOUT ANY PRODUCT AND SERVICES THAT YOU ARE NOT SURE ABOUT</h3></Card.Body>
          </Col>
          
          
          <Col md="6">
            <Card className="card-tasks">
                <div>
                <img src={require('assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(18).png')}
                height={300}
                width={600}
               alt='market consultant'>
                </img>
                  </div>
                  <Card.Body> <h3>EDUCATING MARKET SYSTEM TO THE PUBLIC </h3></Card.Body>
              </Card>
          </Col>
          <Col md="6">
            <Card>
             <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(19).png")}
                 height={300}
                 width={600} 
                 alt='follow us on our social media for futher information'>
                 </img>
              </Card>
              <Card.Body> <h3>FOLLOW US OUR SOCIAL MEDIA PLATFORMS FOR MORE INFORMATIONS </h3></Card.Body>
          </Col>
          </Row>
      </Container>
    </>
                );
}

export default Dashboard;
