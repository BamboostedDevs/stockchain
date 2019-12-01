import React, { Component } from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Typography
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MenuIcon from "@material-ui/icons/Menu";
import Router from "next/router";
<<<<<<< HEAD
import { Row, Col } from "react-bootstrap";
import validateContainer from "../../../containers/validate";
=======
import validateContainer from "../../../containers/validate";
import { Row, Col } from "react-bootstrap";
>>>>>>> 621cfb25f34923da8272bf00b4bb3ab5ef260e38

type State = {
  drawer: boolean;
};
type Props = {
  children?: any;
};

export default class Sidebar extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      drawer: false
    };
    this.changeDrawer = this.changeDrawer.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    validateContainer.checkIfLogged(false);
    window.sessionStorage.setItem("isLogged", "false");
    window.location.href = "/";
  }

  changeDrawer() {
    this.setState({ drawer: !this.state.drawer });
    console.log(this.state.drawer);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Drawer open={this.state.drawer} onClose={this.changeDrawer}>
          <div
            style={{ width: 250 }}
            onClick={this.changeDrawer}
            onKeyDown={this.changeDrawer}
          >
            <Toolbar
              style={{
                justifyContent: "center",
                paddingTop: "5vh",
                paddingBottom: "5vh",
                paddingLeft: "2vh",
                paddingRight: "2vh"
              }}
            >
              <Typography>
                <img
                  src="./images/StockChainLogo.png"
                  height="50vh"
                  width="auto"
                />
              </Typography>
            </Toolbar>
            <List>
              <ListItem button onClick={() => Router.push("/")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => Router.push("/dividend")}>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Dividend" />
              </ListItem>
            </List>
            <Divider style={{ marginTop: "10vh" }} />
            {children}
            <Divider />
            <List>
              <ListItem
                style={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  width: "50vw"
                }}
                button
                onClick={this.logout}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            maxWidth: "100vw"
          }}
        >
          <Row>
            <Col>
              <MenuIcon
                style={{
                  marginTop: "3vh",
                  marginLeft: "2vh",
                  width: "10vw"
                }}
                onClick={this.changeDrawer}
              />
            </Col>
            <Col />
            <Col />
            <Col>
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{
                  top: "2vh",
                  right: 0,
                  color: "rgb(192,192,192)",
                  backgroundColor: "rgb(7,71,166)"
                }}
              >
                {/* {isinvestor ? x : y} */}
                8.000zł
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
