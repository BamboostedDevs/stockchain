import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Typography, Divider, TextField, Button, Fab } from "@material-ui/core";
import Swal from "sweetalert2";

type State = {
  payed: number;
  value: number;
};

export default class InvestorDividend extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      payed: 2000000,
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    Swal.fire({
      title: "Attention",
      icon: "info",
      text: "Are you sure you want to continue?",
      showCancelButton: true
    }).then(result => {
      this.setState({ payed: this.state.payed + this.state.value });
      this.setState({ value: 0 });
    });
  }

  render() {
    return (
      <Col
        style={{
          marginTop: "5vh",
          marginBottom: "5vh"
        }}
      >
        <br style={{ lineHeight: "15vh" }} />
        <Row style={{ justifyContent: "center", color: "white" }}>
          <Typography variant="h3">Dividend</Typography>
        </Row>
        <br style={{ lineHeight: "2vh" }} />
        <Divider style={{ height: "0.25vh" }} />
        <br style={{ lineHeight: "5vh" }} />
        <Row style={{ justifyContent: "center", color: "white" }}>
          <Typography variant="h6">
            {"Dividend payed: " + this.state.payed + " zł"}
          </Typography>
        </Row>
        <Row style={{ justifyContent: "center", color: "white" }}>
          <Typography variant="h6">Number of authorities: 147</Typography>
        </Row>
        <br style={{ lineHeight: "50vh" }} />
        <Row
          style={{ justifyContent: "center", color: "white", marginTop: "3vh" }}
        >
          <Typography variant="h6">Inster a number you want to pay:</Typography>
        </Row>
        <br style={{ lineHeight: "50vh" }} />

        <Row
          style={{
            justifyContent: "center",
            color: "white",
            marginTop: "8vh"
          }}
        >
          <TextField
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
            variant="filled"
          ></TextField>
        </Row>
        <br style={{ lineHeight: "50vh" }} />
        <Row
          style={{ justifyContent: "center", color: "white", marginTop: "5vh" }}
        >
          <Fab
            style={{
              backgroundColor: "rgb(4, 201, 0)",
              minWidth: "60vw",
              color: "white"
            }}
            onClick={this.handleClick}
            variant="extended"
            size="large"
          >
            Pay
          </Fab>
        </Row>
      </Col>
    );
  }
}
