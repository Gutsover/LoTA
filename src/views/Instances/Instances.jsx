import React from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  CardTitle,
  CardBody,
  Table,
  Button
} from "reactstrap";
import { PanelHeader } from "components";
import { instances } from "../../variables/data";

class Instances extends React.Component {
  state = {
    view: "card"
  };

  changeView = () => {
    if (this.state.view === "card") {
      this.setState({
        view: "table"
      });
    } else {
      this.setState({
        view: "card"
      });
    }
  };

  render() {
    let icon = "design_bullet-list-67";

    if (this.state.view === "table") {
      icon = "files_single-copy-04";
    }

    return (
      <div>
        <PanelHeader
          size="md"
          content={
            <Button color="success" round="true" onClick={this.changeView}>
              <i className={"now-ui-icons " + icon} />
            </Button>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12}>
              {this.state.view === "card" ? (
                instances.map(instance => (
                  <Card key={instance.name} style={{ width: "20rem" }}>
                    <CardBody>
                      <CardTitle>{instance.name}</CardTitle>
                      <ListGroup flush>
                        <ListGroupItem>
                          <strong>Category:</strong> {instance.categorie}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Type:</strong> {instance.type}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Status:</strong> {instance.status}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Date of creation:</strong>{" "}
                          {instance.creationDate}
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
                        <th>Category</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Date of Creation</th>
                      </tr>
                    </thead>

                    <tbody>
                      {instances.map(instance => (
                        <tr key={instance.name}>
                          <td>{instance.name}</td>

                          <td>{instance.categorie}</td>

                          <td>{instance.type}</td>
                          <td>{instance.status}</td>
                          <td>{instance.creationDate}</td>
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

export default Instances;
