import React from "react";
import { Row, Col, Card } from "reactstrap";
import { PanelHeader } from "components";

const User = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          <Card>User</Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default User;
