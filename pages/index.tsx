import React, { Component } from "react";
import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import Scroll from "../components/Scroll";
import { Landing, Emitter } from "../components/Segments";
import validateContainer from "../containers/validate";

const List = [
  { name: "Google", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Java", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Dell", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Toshiba", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Cisco", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "McAfee", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Nvidia", logo: "/icon.png", bid: 20000, ask: 190080 },
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

type State = {
  size: boolean | "large" | "medium" | "small";
  isLogged: boolean;
  userType: "emitter" | "investor" | null | undefined;
};
type Props = {
  children: any;
};

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      size: false,
      isLogged: false,
      userType: undefined
    };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    var isLogged: boolean;
    const height = window.innerHeight;
    const width = window.innerWidth;
    size = sizeContainer.changeSize(height, width);
    isLogged = validateContainer.state.isLogged;
    const userType = validateContainer.state.userType;
    this.setState({ size, isLogged, userType });
  }
  render() {
    return (
      <Layout>
        {this.state.isLogged ? (
          this.state.userType === "investor" ? (
            <Scroll List={List} />
          ) : (
            <Emitter />
          )
        ) : (
          <Landing />
        )}
      </Layout>
    );
  }
}
