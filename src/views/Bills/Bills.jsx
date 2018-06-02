import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardTitle,
  Table,
  Button
} from "reactstrap";
import { PanelHeader } from "components";
import { bills } from "../../variables/data";

class Bills extends React.Component {
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
            <Button
              className="buttonView"
              color="success"
              round="true"
              onClick={this.changeView}
            >
              <i className={"now-ui-icons " + icon} />
            </Button>
          }
        />
        <div className="content">
          <Row>
            <Col xs={12}>
              {this.state.view === "card" ? (
                bills.map((bill, i) => (
                  <Card key={i} style={{ width: "20rem" }}>
                    <CardBody>
                      <CardTitle>Bill #{i + 1}</CardTitle>
                      <ListGroup flush>
                        <ListGroupItem>
                          <strong>Date : </strong> {bill.date}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Instance : </strong> {bill.instance}
                        </ListGroupItem>
                        <ListGroupItem>
                          <strong>Amount : </strong> {bill.amount}
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
                        <th>Date</th>
                        <th>Instance</th>
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>

                    <tbody>
                      {bills.map((bill, i) => (
                        <tr key={i}>
                          <td>{bill.date}</td>

                          <td>{bill.instance}</td>

                          <td className="text-right">{bill.amount}</td>
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

export default Bills;
