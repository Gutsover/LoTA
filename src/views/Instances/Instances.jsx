import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem, CardTitle, CardBody } from "reactstrap";
import { PanelHeader } from "components";
import { instances } from "../../variables/data";

const Instances = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          {
            instances.map(instance => (
              <Card key={instance.name} style={{width: '20rem'}}>
                <CardBody>
                  <CardTitle>{instance.name}</CardTitle>
                  <ListGroup flush>
                    <ListGroupItem><strong>Category:</strong> {instance.categorie}</ListGroupItem>
                    <ListGroupItem><strong>Type:</strong> {instance.type}</ListGroupItem>
                    <ListGroupItem><strong>Status:</strong> {instance.status}</ListGroupItem>
                    <ListGroupItem><strong>Date of creation:</strong> {instance.creationDate}</ListGroupItem>
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

export default Instances;