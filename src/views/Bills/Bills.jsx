import React from "react";
import { Row, Col, Card, CardBody, ListGroup, ListGroupItem, CardTitle } from "reactstrap";
import { PanelHeader } from "components";
import { bills } from "../../variables/data";

console.dir(bills);

const Bills = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
        {
          bills.map((bill, i) => (
            <Card key={bill} style={{width: '20rem'}}>
              <CardBody>
              <CardTitle>Bill #{i+1}</CardTitle>
                <ListGroup flush>
                  <ListGroupItem><strong>Date : </strong> {bill.date}</ListGroupItem>
                  <ListGroupItem><strong>Instance : </strong> {bill.instance}</ListGroupItem>
                  <ListGroupItem><strong>Amount : </strong> {bill.amount}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          ))
        }
        </Col>
      </Row>
    </div>
  </div>
);

export default Bills;
