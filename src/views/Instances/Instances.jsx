import React from "react";
import { Row, Col, Card } from "reactstrap";
import { PanelHeader } from "components";

const Instances = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          <Card>Instances</Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default Instances;
