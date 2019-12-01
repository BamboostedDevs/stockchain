import React, { Component } from "react";
import Layout from "../../Layout";
import Scroll from "../../Scroll";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Row } from "react-bootstrap";

const List = [
  { name: "Google", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Java", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Dell", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Toshiba", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Cisco", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "McAfee", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Nvidia", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "HP", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Microsoft", logo: "/icon.png", bid: 200700, ask: 19000 },
  { name: "Fujitsu", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "AMD", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Lenovo", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "IBM", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Asus", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Apple", logo: "/icon.png", bid: 200000, ask: 190000 },
  { name: "Amazon", logo: "/icon.png", bid: 20000, ask: 19000 }
];

export default class Home extends Component {
  render() {
    return (
      <Layout><Toolbar style={{ justifyContent: "center", marginTop: "3vh", marginBottom: "5vh" }}><Typography><img src="./images/StockChainLogo.png" height="75vh"
        width="auto" /></Typography></Toolbar>
        <Scroll List={List} />
      </Layout>
    );
  }
}
