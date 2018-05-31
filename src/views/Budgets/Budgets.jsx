import React from "react";
import { Row, Col, Card } from "reactstrap";
import { PanelHeader } from "components";
import { budgets } from "../../variables/data";

console.dir(budgets);

const Budgets = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          <Card>Budgets</Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default Budgets;
