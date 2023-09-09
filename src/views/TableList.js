import React from "react";

// react-bootstrap components
import {
  
  Card,
  
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
 <div className="text-center" title="IMISSEDSHOPPING GOT TALENTS">
  
 <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(12).png")} className="rounded mx-auto d-block"
 height={300}
 width={600}
 ></img>
 </div>
      <Container fluid>
      <Row>
          <Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(1).png")}alt="electronics"></img>
               </Card>
          </Col>
        

        
          <Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(2).png")}alt="mechanic"></img>
              
                    </Card>
          </Col>
        
        
          <Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(3).png")}alt="electrical"></img>
              </Card>
          </Col>

         <Col md= "4">
            <Card>
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(4).png")}alt="furniture"></img>
               </Card>
          </Col>
        
       < Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(5).png")}alt="real estate"></img>
              
                    </Card>
          </Col>
          < Col md="4">
            <Card>
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(6).png")}alt="sporting equipment"></img>
                </Card>
          </Col>

    < Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(7).png")}alt="renting services"></img>
                </Card>
          </Col>
          < Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(8).png")}alt="agriculture"></img>
                 </Card>
          </Col>
          < Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(9).png")}alt="automobile"></img>
                 </Card>
          </Col>

          <Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(13).png")}alt="entertainment"></img>
              
                    </Card>
          </Col>
          <Col md="4">
            <Card>
              
              <img src={require("assets/img/Giving Information On The Best Goods & Services Worth Investing In 2023(14).png")}alt="and many more"></img>
              
                    </Card>
          </Col>
        
        
</Row>

   
  
      </Container>
    </>
  );
}

export default TableList;
