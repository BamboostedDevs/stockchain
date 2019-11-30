import React, { Component } from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MenuIcon from "@material-ui/icons/Menu";
import Router from "next/router";

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
  }

  changeDrawer() {
    this.setState({ drawer: !this.state.drawer });
    console.log(this.state.drawer);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <MenuIcon
          style={{
            position: "fixed",
            top: "2vh",
            left: 0,
            width: "10vw"
          }}
          onClick={this.changeDrawer}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{
            top: "2vh",
            right: "2vw",
            position: "fixed",
            zIndex: 255,
            color: "rgb(192,192,192)",
            backgroundColor: "rgb(7,71,166)"
          }}
        >
          {/* {isinvestor ? x : y} */}
          Current balance
        </Button>

        <Drawer open={this.state.drawer} onClose={this.changeDrawer}>
          <div
            style={{ width: 250 }}
            onClick={this.changeDrawer}
            onKeyDown={this.changeDrawer}
          >
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Dividend" />
              </ListItem>
            </List>
            <Divider />
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
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
