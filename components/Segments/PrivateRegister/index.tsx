import React, { Component } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import Router from "next/router";

export default class privateRegister extends Component {
  render() {
    return (
      <div>
        <Paper style={{ height: "10vh", width: "100vw" }}>
          <Typography variant="h6" component="h3">
            Logo
          </Typography>
        </Paper>
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
            <Row />
            <Form
              style={{
                marginTop: "3vh",
                marginBottom: "3vh",
                color: "rgb(32,33,36)"
              }}
            >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" />
                <Form.Label>Adress</Form.Label>
                <Form.Control type="text" />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="pasword" />
                <Form.Label>National ID photos</Form.Label>
                <Form.Row
                  style={{ justifyContent: "center", marginBottom: "2vh" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ background: "rgb(7,71,166)", width: "60vw" }}
                  >
                    Choose photos
                  </Button>
                </Form.Row>
                <Form.Row
                  style={{
                    justifyContent: "space-around"
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ background: "rgb(7,71,166)" }}
                    onClick={() => Router.push("/")}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ background: "rgb(7,71,166)" }}
                    onClick={() => Router.push("/home")}
                  >
                    Register
                  </Button>
                </Form.Row>
              </Form.Group>
            </Form>
            <Row />
          </Col>
        </Paper>
      </div>
    );
  }
}
