import React, { Component } from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MenuIcon from "@material-ui/icons/Menu";

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
