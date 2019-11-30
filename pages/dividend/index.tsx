import React, { Component } from "react";
import Layout from "../../components/Layout";
import Dividend from "../../components/Segments/Dividend";

export default class DividendMain extends Component {
  render() {
    return (
      <Layout>
        <Dividend></Dividend>
      </Layout>
    );
  }
}
