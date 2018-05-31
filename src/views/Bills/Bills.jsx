import React from "react";
import { Row, Col, Card } from "reactstrap";
import { PanelHeader } from "components";
import { bills } from "../../variables/data";

console.dir(bills);

const Bills = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          <Card>{bills[0].amount}</Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default Bills;
