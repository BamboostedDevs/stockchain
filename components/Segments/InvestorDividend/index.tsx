import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Typography, Divider, Paper } from "@material-ui/core";
//@ts-ignore
import IsVisible from "react-is-visible";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import Scroll from "../../Scroll";


type State = {
  visible: number[];
  selected: number;
};

const styles = {
  tile: {
    height: "80vh",
    marginBottom: "-65vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  },
  tileTop: {
    height: "80vh",
    marginBottom: "-45vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  },
  selected: {
    height: "80vh",
    marginBottom: "-5vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.5s"
  }
};


const List = [
  { name: "Google", logo: "/icon.png", percent: 20 },
  { name: "Java", logo: "/icon.png", percent: 20 },
  { name: "Dell", logo: "/icon.png", percent: 20 },
  { name: "Toshiba", logo: "/icon.png", percent: 20 },
  { name: "Cisco", logo: "/icon.png", percent: 20 },
  { name: "McAfee", logo: "/icon.png", percent: 20 },
  { name: "Nvidia", logo: "/icon.png", percent: 20 },
  { name: "HP", logo: "/icon.png", percent: 20 },
  { name: "Microsoft", logo: "/icon.png", percent: 20 },
  { name: "Fujitsu", logo: "/icon.png", percent: 20 },
  { name: "AMD", logo: "/icon.png", percent: 20 },
  { name: "Lenovo", logo: "/icon.png", percent: 20 },
  { name: "IBM", logo: "/icon.png", percent: 20 },
  { name: "Asus", logo: "/icon.png", percent: 20 },
  { name: "Apple", logo: "/icon.png", percent: 20 },
  { name: "Amazon", logo: "/icon.png", percent: 20 }
];


function uniq(a: number[]) {
  return Array.from(new Set(a));
}

function getTop(a: any) {
  const min = Math.min(...a);
  return min == Infinity ? 0 : min;
}

export default class InvestorDividend extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: [],
      selected: -1
    };

  }



  render() {
    return (
      <div
        style={{
          marginTop: "5vh",
          marginBottom: "5vh"
        }}
      >

        <br style={{ lineHeight: "15vh" }} />
        <Row style={{ justifyContent: "center", color: "white" }}>
          <Typography variant="h3">Dividend</Typography>
        </Row>
        <br style={{ lineHeight: "15vh" }} />

        <Divider />
        <br style={{ lineHeight: "15vh" }} />
        <Scroll List={List} />
      </div>
    );
  }
}
