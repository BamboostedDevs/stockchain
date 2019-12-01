import React, { Component } from "react";
import Layout from "../../Layout";
import Scroll from "../../Scroll";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Row } from "react-bootstrap";

const List = [
  { name: "Google", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "Java", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company"},
  { name: "Dell", logo: "/icon.png", bid: 20000, ask: 19000 , info: "Information about company"},
  { name: "Toshiba", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "Cisco", logo: "/icon.png", bid: 20000, ask: 19000 , info: "Information about company"},
  { name: "McAfee", logo: "/icon.png", bid: 20000, ask: 19000 , info: "Information about company"},
  { name: "Nvidia", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "HP", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "Microsoft", logo: "/icon.png", bid: 200700, ask: 19000, info: "Information about company" },
  { name: "Fujitsu", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "AMD", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "Lenovo", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "IBM", logo: "/icon.png", bid: 20000, ask: 19000, info: "Information about company" },
  { name: "Asus", logo: "/icon.png", bid: 20000, ask: 19000 , info: "Information about company"},
  { name: "Apple", logo: "/icon.png", bid: 200000, ask: 190000 , info: "Information about company"},
  { name: "Amazon", logo: "/icon.png", bid: 20000, ask: 19000 , info: "Information about company"}
];

export default class Home extends Component {
  render() {
    return (
      <Layout><Toolbar style={{ justifyContent: "center", marginTop: "3vh", marginBottom: "5vh" }}><Typography><img src="./images/StockChainLogo.png" height="75vh"
        width="auto" /></Typography></Toolbar>
        <Scroll List={List} type={true} />
      </Layout>
    );
  }
}
