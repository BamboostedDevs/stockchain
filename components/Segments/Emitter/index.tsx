import React, { Component } from "react";
import { Typography, FormControl, Select } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import Scroll from "../../Scroll";

const List = [
  { name: "Name1", logo: "/person.png", percent: 30 },
  { name: "Name2", logo: "/person.png", percent: 10 },
  { name: "Name3", logo: "/person.png", percent: 5.5 },
  { name: "Name4", logo: "/person.png", percent: 5.4 },
  { name: "Name5", logo: "/person.png", percent: 2.1 },
  { name: "Name6", logo: "/person.png", percent: 1.85 },
  { name: "Name7", logo: "/person.png", percent: 1.84 },
  { name: "Name8", logo: "/person.png", percent: 1.55 },
  { name: "Name9", logo: "/person.png", percent: 0.98 },
  { name: "Name10", logo: "/person.png", percent: 0.94 },
  { name: "Name11", logo: "/person.png", percent: 0.88 },
  { name: "Name12", logo: "/person.png", percent: 0.87 },
  { name: "Name13", logo: "/person.png", percent: 0.85 },
  { name: "Name14", logo: "/person.png", percent: 0.43 },
  { name: "Name15", logo: "/person.png", percent: 0.21 },
  { name: "Name16", logo: "/person.png", percent: 0.05 }
];

type State = {
  event: any;
  bids: Array<number>;
  asks: Array<number>;
  clickedBid: number;
  clickedAsk: number;
};

export default class Emitter extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      event: null,
      bids: [22000, 22500, 22600, 23000, 23400, 23500, 23700, 24000],
      asks: [21000, 21500, 21600, 22000, 22500, 23000, 25000, 25500],
      clickedBid: 0,
      clickedAsk: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    console.log(event.target);
    console.log(event.target.value);
  }

  render() {
    return (
      <>
        <Col
          style={{
            marginTop: "5vh",
            marginBottom: "5vh"
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <img
              style={{ borderRadius: "50%" }}
              src="/images/random_log.jpg"
              alt="Avatar"
              height="150"
              width="150"
            />
          </Row>
          <Row style={{ justifyContent: "center", color: "white" }}>
            <Typography variant="h3">A Company</Typography>
          </Row>
          <Row style={{ justifyContent: "center", color: "white" }}>
            <Typography variant="h6">Public Company</Typography>
          </Row>
          <Row style={{ justifyContent: "center", color: "white" }}>
            <Typography variant="h6">14 Random St</Typography>
          </Row>
          <Row style={{ justifyContent: "center", color: "white" }}>
            <Typography variant="h6">Somewhere, Some City</Typography>
          </Row>
          <Row style={{ justifyContent: "center", color: "white" }}>
            <Typography variant="h6">KWSW 654, Country</Typography>
          </Row>
          <Row style={{ justifyContent: "space-around", marginTop: "3vh" }}>
            <Col style={{ justifyContent: "center" }}>
              <FormControl
                style={{
                  width: "100%",
                  color: "white",
                  background: "rgb(32,33,36)"
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "4vw", marginTop: "2vh" }}
                >
                  Bids:
              </Typography>
                <Select
                  multiple
                  native
                  value={this.state.clickedBid}
                  onChange={this.handleChange}
                  inputProps={{
                    id: "select-multiple-native"
                  }}
                  style={{ color: "white" }}
                >
                  {this.state.bids.map(bid => (
                    <option
                      style={{ marginBottom: "4vh", marginLeft: "9vw" }}
                      key={bid}
                      value={bid}
                    >
                      {bid}
                    </option>
                  ))}{" "}
                </Select>
              </FormControl>
            </Col>
            <Col style={{ justifyContent: "center" }}>
              <FormControl
                style={{
                  width: "100%",
                  color: "white",
                  background: "rgb(60,64,66)"
                }}
              >
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "4vw", marginTop: "2vh" }}
                >
                  Asks:
              </Typography>
                <Select
                  multiple
                  native
                  value={this.state.clickedAsk}
                  onChange={this.handleChange}
                  inputProps={{
                    id: "select-multiple-native"
                  }}
                  style={{ color: "white" }}
                >
                  {this.state.asks.map(ask => (
                    <option
                      style={{ marginBottom: "4vh", marginLeft: "9vw" }}
                      key={ask}
                      value={ask}
                    >
                      {ask}
                    </option>
                  ))}{" "}
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Col>
        <Scroll List={List} /></>
    );
  }
}
