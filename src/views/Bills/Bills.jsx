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

import { ResponsiveBar } from "@nivo/bar";

const data = bills.map(bill => ({
  date: bill.date,
  bill: Number(bill.amount)
}));

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
          size="lg"
          content={
            <div className="header-container">
              <Button
                className="buttonViewBills"
                color="success"
                round="true"
                onClick={this.changeView}
              >
                <i className={"now-ui-icons " + icon} />
              </Button>

              <ResponsiveBar
                className="bills-graph"
                data={data}
                keys={["bill"]}
                indexBy="date"
                margin={{
                  top: 50,
                  right: 130,
                  bottom: 50,
                  left: 60
                }}
                padding={0.3}
                colors="nivo"
                colorBy="id"
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "#38bcb2",
                    size: 4,
                    padding: 1,
                    stagger: true
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "#109909",
                    color: "#18CE0F",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                  }
                ]}
                fill={[
                  {
                    match: {
                      id: "bill"
                    },
                    id: "lines"
                  }
                ]}
                borderColor="#FFF"
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "date",
                  legendPosition: "center",
                  legendOffset: 36
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "amount",
                  legendPosition: "center",
                  legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="#FFF"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                  {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    translateX: 120,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 2,
                    symbolSize: 20,
                    textColor: "#FFF"
                  }
                ]}
                theme={{
                  axis: {
                    textColor: "#FFF",
                    tickColor: "#FFF"
                  },
                  tooltip: {
                    container: {
                      fontSize: "13px"
                    }
                  },
                  labels: {
                    textColor: "#FFF"
                  }
                }}
              />
            </div>
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
