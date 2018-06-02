import React from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  CardTitle,
  CardBody,
  Table
} from "reactstrap";
import { PanelHeader } from "components";
import { budgets } from "../../variables/data";

class Budgets extends React.Component {
  state = {
    view: "card"
  };

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              {this.state.view === "card" ? (
                budgets.map(budget => (
                  <Card key={budget.name} style={{ width: "20rem" }}>
                    <CardBody>
                      <CardTitle>{budget.name}</CardTitle>
                      <ListGroup flush>
                        <ListGroupItem>
                          <strong>Seuil Alert : </strong> {budget.seuilAlert}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Seuil seuilMaximum : </strong>{" "}
                          {budget.seuilMaximum}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Instances : </strong>
                        </ListGroupItem>
                        <ListGroupItem>
                          <ListGroup flush>
                            {budget.instances.map((instance, i) => (
                              <ListGroupItem key={i}>{instance}</ListGroupItem>
                            ))}
                          </ListGroup>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <Card>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Seuil Alert</th>
                        <th>Seuil Maximum</th>
                        <th>Instances</th>
                      </tr>
                    </thead>

                    <tbody>
                      {budgets.map(budget => (
                        <tr key={budget.name}>
                          <td>{budget.name}</td>

                          <td>{budget.seuilAlert}</td>

                          <td>{budget.seuilMaximum}</td>
                          <td>{budget.instances}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Budgets;
