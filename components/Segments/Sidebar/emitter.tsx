import React, { Component } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ContactsIcon from "@material-ui/icons/Contacts";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ListIcon from "@material-ui/icons/List";
export default class EmitterSidebar extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="# 145th"></ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Authorized"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="16 investors"></ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}
