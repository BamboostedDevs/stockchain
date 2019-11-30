import React, { Component } from "react";
import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import { Col, Row } from "react-bootstrap";

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
    );
  }
}
