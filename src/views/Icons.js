import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
} from "react-bootstrap";
import { TypeH3 } from "react-bootstrap-icons";
import { CardBody } from "reactstrap";
 
function Icons() {
  return (
    <>
      <Container fluid>
        <div>
          <Card>
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(20).png")} className="rounded mx-auto d-block" >
             </img>
             <Card.Body>
             <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(26).png")} className="rounded mx-auto d-block" >
             </img>
              </Card.Body>
              </Card>

</div>

<div>
  <Card>
    <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(22).png")}>
    </img>
    <Card.Header as={TypeH3} >
 INFORMATIONS IS GREAT KEY OF EVERY BUSINESS I MISSED SHOPPING ARE THERE TO POWER YOU WITH NECESSARY INFORMATION YOU NEED WHICH ARE AS FOLLOWS</Card.Header>

    <Card.Body as="h5">
    <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(27).png")} className="rounded mx-auto d-block" >
             </img>   
 
    </Card.Body>
  </Card>
</div>



<div>
  <Card >
    <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(23).png")}></img>
    <Card.Body >
    <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(28).png")} className="rounded mx-auto d-block" >
             </img>
 </Card.Body>
  </Card>
</div>

          </Container>
          </>
          );
          }
          export default Icons;