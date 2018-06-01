import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { PanelHeader } from "components";
import { CardAuthor } from 'components';
import { user } from "../../variables/data";

const User = () => (
  <div>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col md={8}>
        {
          user.map(user => (
        
          <Card className="card-user" key={user.name} style={{width: '20rem'}}>
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
        }
        </Col>
      </Row>
    </div>
  </div>
);

export default User;
