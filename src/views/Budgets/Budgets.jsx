import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem, CardTitle, CardBody } from "reactstrap";
import { PanelHeader } from "components";
import { budgets } from "../../variables/data";

console.dir(budgets);

const Budgets = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col xs={12}>
          { budgets.map(budget => (
          <Card key={budget.name} style={{width: '20rem'}}>
          <CardBody>
            <CardTitle>{budget.name}</CardTitle>
              <ListGroup flush>
                <ListGroupItem><strong>Seuil Alert : </strong> {budget.seuilAlert}</ListGroupItem>
                <ListGroupItem><strong>Seuil seuilMaximum : </strong> {budget.seuilMaximum}</ListGroupItem>
                <ListGroupItem><strong>Instances : </strong></ListGroupItem>
                <ListGroupItem>
                  <ListGroup flush>
                  {
                    budget.instances.map(instance => (
                      <ListGroupItem>{instance}</ListGroupItem>
                      )
                    )
                  }
                  </ListGroup>
                </ListGroupItem>

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

export default Budgets;
