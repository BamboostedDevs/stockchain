import React, { Component } from "react";
import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import { Landing } from "../components/Segments";
import validateContainer from "../containers/validate";

const List = [
  { name: "Company1", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company2", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company2", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company3", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company4", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company5", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company6", logo: "/icon.png", bid: 20000, ask: 190080 },
  { name: "Company7", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company8", logo: "/icon.png", bid: 200700, ask: 19000 },
  { name: "Company9", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company10", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company11", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company12", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company13", logo: "/icon.png", bid: 20000, ask: 19000 },
  { name: "Company14", logo: "/icon.png", bid: 200000, ask: 190000 },
  { name: "Company15", logo: "/icon.png", bid: 20000, ask: 19000 }
];

type State = {
  size: boolean | "large" | "medium" | "small";
  isLogged: boolean;
};
type Props = {
  children: any;
};

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      size: false,
      isLogged: false
    };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    var isLogged: boolean;
    const height = window.innerHeight;
    const width = window.innerWidth;
    size = sizeContainer.changeSize(height, width);
    isLogged = validateContainer.state.isLogged;
    this.setState({ size, isLogged });
  }
  render() {
    return (
      <Layout>
        {this.state.isLogged ? <Scroll List={List} /> : <Landing />}
      </Layout>
    );
  }
}
