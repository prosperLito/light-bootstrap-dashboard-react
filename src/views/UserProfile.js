import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Fashion And Designers</Card.Title>
              </Card.Header>
              <img src={require("assets/img/fashion and designers.jpg")}alt="fashion and designers"></img>
              <Card.Body>
               <h3>Researching And Advertising Good Fashion And Designers</h3>
                </Card.Body> 
                    </Card>
          </Col>
        

        
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Hair Stylist</Card.Title>
              </Card.Header>
              <img src={require("assets/img/haier styles.jpg")}alt="hair stylist"></img>
              <Card.Body>
              <h3>Researching And Advertising Good Hair Stylist Through Our Survey Experts </h3>
                </Card.Body> 
                    </Card>
          </Col>
        
        
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Enginnering</Card.Title>
              </Card.Header>
              <img src={require("assets/img/engineering genius.jpg")}alt="enginners"></img>
              <Card.Body>
               <h3>Researching And Advertising Good Enginners Through Our Survey Eperts</h3>
                </Card.Body> 
                    </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Artist</Card.Title>
              </Card.Header>
              <img src={require("assets/img/artist.jpg")}alt="artist"></img>
              <Card.Body>
            <h3>Researching And Advertising Good Artist Through Our Survey Experts </h3>
                </Card.Body> 
                    </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Information & Tech</Card.Title>
              </Card.Header>
              <img src={require("assets/img/iT genius.jpg")}alt="technology"></img>
              <Card.Body>
               <h3>Researching And Advertising Web designers, Software Developers And Other Tech. Related Through Our Survey Experts</h3> 
                </Card.Body> 
                    </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Make Up Artist</Card.Title>
              </Card.Header>
              <img src={require("assets/img/makeup.jpg")}alt="make up artist"></img>
              <Card.Body>
                <h3>Researching And Advertising Good Make Up Artist Through Our Survey Experts</h3>
                </Card.Body> 
                    </Card>
          </Col>
        
       < Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Delivery Companies</Card.Title>
              </Card.Header>
              <img src={require("assets/img/drivers.jpg")}alt="logistics"></img>
              <Card.Body>
              <h3> Researching And Advertising Delivery Companies Through Our Survey Experts</h3>
                </Card.Body> 
                    </Card>
          </Col>
          < Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h3">Cathering</Card.Title>
              </Card.Header>
              <img src={require("assets/img/cooking.jpg")} alt="cathering"></img>
              <Card.Body>
               <h3>Researching And Advertising great Cathering Through Our Survey Experts</h3>
                </Card.Body> 
                    </Card>
          </Col>

< Col md="4">
            <Card onClick>
              <Card.Header>
                <Card.Title as="h3">Others</Card.Title>
              </Card.Header>
              <img src={require("assets/img/and so on.jpg")}alt="other related services"></img>
              <Card.Body>
           <h3>   And Other Related Services </h3>
                </Card.Body> 
                    </Card>
          </Col>
</Row>
      </Container>
    </>
  );
}

export default User;
