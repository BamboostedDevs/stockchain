import React, { Component } from "react";
import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import Scroll from "../components/Scroll";

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
};
type Props = {
  children: any;
};

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { size: false };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    const height = window.innerHeight;
    const width = window.innerWidth;
    size = sizeContainer.changeSize(height, width);
    this.setState({ size: size });
  }
  render() {
    return (
      <Layout>
        <Scroll List={List}></Scroll>
        {/* {isLogged ? <Scroll /> : <Landing />} */}
      </Layout>
    );
  }
}
