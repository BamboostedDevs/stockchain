import React, { Component } from "react";
import Layout from "../components/Layout";
import { Landing } from "../components/Segments";

export default class Main extends Component {
  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    );
  }
}
