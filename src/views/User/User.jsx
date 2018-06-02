import React from "react";
import { Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import { PanelHeader } from "components";
import { CardAuthor } from "components";
import { user } from "../../variables/data";

class User extends React.Component {
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
            <Col md={12}>
              {this.state.view === "card" ? (
                user.map(user => (
                  <Card
                    className="card-user"
                    key={user.name}
                    style={{ width: "20rem" }}
                  >
                    <CardBody>
                      <CardAuthor
                        avatar={user.avatar}
                        avatarAlt="..."
                        title={user.name}
                        description={user.mail}
                      />
                      <strong>{user.group}</strong>
                    </CardBody>
                  </Card>
                ))
              ) : (
                <Card>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Mail</th>
                        <th className="text-right">Group</th>
                      </tr>
                    </thead>

                    <tbody>
                      {user.map(user => (
                        <tr key={user.name}>
                          <td>{user.name}</td>

                          <td>{user.mail}</td>

                          <td className="text-right">{user.group}</td>
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

export default User;
