import React, { Component } from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import Router from "next/router";
//@ts-ignore
import Swal from "sweetalert2";
import validateContainer from "../../../containers/validate";

type State = {
  email: string;
  password: string;
  credentials: { email: string; password: string }[];
  name: "email" | "password";
};

export default class Login extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "email",
      credentials: [
        {
          email: "emitter@stockchain.org",
          password: "qwertyuiop"
        },
        {
          email: "investor@stockchain.org",
          password: "qwertyuiop"
        }
      ],
      email: "",
      password: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validCredentials = this.validCredentials.bind(this);
  }

  validCredentials() {
    const email = this.state.email;
    const password = this.state.password;
    const credentials = this.state.credentials;
    if (email === credentials[0].email) {
      if (password === credentials[0].password) {
        return "emitter";
      } else {
        return false;
      }
    } else if (email === credentials[1].email) {
      if (password === credentials[1].password) {
        return "investor";
      } else {
        return false;
      }
    }
  }

  handleChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "email") {
      this.setState({ email: value });
    } else {
      this.setState({ password: value });
    }
  }

  async handleClick() {
    Swal.fire({
      title: "Signing in",
      showCancelButton: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      }
    });
    const response = await this.validCredentials();

    if (response) {
      //@ts-ignore
      Swal.fire({
        title: "Signed in",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      }).then((login: any) => {
        if (login.dismiss === Swal.DismissReason.timer) {
          validateContainer.changeType(response);
          validateContainer.checkIfLogged(true);
          window.sessionStorage.setItem("userType", response);
          window.sessionStorage.setItem("isLogged", "true");
          Router.push("/");
        }
      });
    } else {
      //@ts-ignore
      Swal.fire({
        title: "Sign in failed",
        icon: "error",
        text: "Check your password and/or email"
      });
    }
  }
  render() {
    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <img
            src="/images/StockChainLogo.png"
            alt="logo"
            height="auto"
            width="80%"
            style={{ paddingTop: "2vh" }}
          ></img>
        </Grid>
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Row
                  style={{
                    justifyContent: "space-around",
                    marginTop: "3vh",
                    marginBottom: "3vh"
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
                    onClick={this.handleClick}
                  >
                    Login
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
