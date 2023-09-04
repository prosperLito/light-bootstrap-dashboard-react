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
  



function Dashboard() {
 
return  (


        <>
     <div className="text" title="IMISSEDSHOPPING GOT TALENTS">
     <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023.png")} className="rounded mx-auto d-block" 
     height={300}
     width={600}
     >

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
     width={600} ></img>
          </div>
              </Card>
              
          </Col>
          
          
          <Col md="6">
            <Card>
              <div>
               <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(16).png")}
               height={300}
               width={600}
                ></img>
                </div>
              
            </Card>
          </Col>
        
        
          <Col md="6">
            <Card>
             <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(17).png")}
                 height={300}
                 width={600} 
                 >
                 </img>
              </Card>
          </Col>
          
          
          <Col md="6">
            <Card className="card-tasks">
                <div>
                <img src={require('assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(18).png')}
                height={300}
                width={600}
               >
                  </img>
                  </div>
              
              </Card>
          </Col>
          <Col md="6">
            <Card>
             <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(19).png")}
                 height={300}
                 width={600} 
                 >
                 </img>
              </Card>
          </Col>


        </Row>
      </Container>
    </>
                );
}

export default Dashboard;
