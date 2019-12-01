import React, { Component } from "react";
import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Landing, Emitter, Home } from "../components/Segments";
import validateContainer from "../containers/validate";

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
            <Home />
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
