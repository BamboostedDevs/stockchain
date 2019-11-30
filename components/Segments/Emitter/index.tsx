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
      <Paper
        style={{
          marginLeft: "3vw",
          marginRight: "3vw",
          marginTop: "5vh",
          marginBottom: "5vh",
          background: "rgb(0,129,203)"
        }}
      >
        <Col>
          <Row style={{ justifyContent: "center" }}>
            <img
              style={{ borderRadius: "50%" }}
              src="/images/random_log.jpg"
              alt="Avatar"
              height="150"
              width="150"
            />
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Typography variant="h3">A Company</Typography>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Typography variant="h5">Public Company</Typography>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Typography variant="h6">14 Random St</Typography>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Typography variant="h6">Somewhere, Some City</Typography>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Typography variant="h6">KWSW 654, Country</Typography>
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <Col style={{ justifyContent: "center" }}>
              <FormControl>
                <Typography variant="subtitle1">Bids:</Typography>
                <Select
                  multiple
                  native
                  value={this.state.clickedBid}
                  onChange={this.handleChange}
                  inputProps={{
                    id: "select-multiple-native"
                  }}
                >
                  {this.state.bids.map(bid => (
                    <option
                      style={{ marginBottom: "2vh" }}
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
              <FormControl>
                <Typography variant="subtitle1">Asks:</Typography>
                <Select
                  multiple
                  native
                  value={this.state.clickedAsk}
                  onChange={this.handleChange}
                  inputProps={{
                    id: "select-multiple-native"
                  }}
                >
                  {this.state.asks.map(ask => (
                    <option
                      style={{ marginBottom: "2vh" }}
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
      </Paper>
    );
  }
}
