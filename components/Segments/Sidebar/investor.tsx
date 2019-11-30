import React, { Component } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddIcon from '@material-ui/icons/Add';
import { List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';

export default class Investor extends Component {
    render() {
        return (
            <div>
                <List>
                    <ListItem button>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText primary="Username"></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AccountBalanceWalletIcon /></ListItemIcon>
                        <ListItemText primary="Balance:"></ListItemText>
                        <br />
                        <ListItemText primary="'x' actions"></ListItemText>
                    </ListItem>
                    <ListItem>
                        <Button style={{ marginLeft: "10vw" }} variant="contained" color="primary">
                            <AddIcon /> {" Top up"}
                        </Button>
                    </ListItem>
                </List>
            </div>
        )
    }
}
