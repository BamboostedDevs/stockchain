import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Emitter } from "../../components/Segments";

export default class EmitterMain extends Component {
  render() {
    return (
      <Layout>
        <Emitter />
      </Layout>
    );
  }
}
