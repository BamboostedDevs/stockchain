import React, { Component } from "react";
import Layout from "../../components/Layout";
import Dividend from "../../components/Segments/Dividend";
import validateContainer from "../../containers/validate";
import { InvestorDividend } from "../../components/Segments";

export default class DividendMain extends Component {
  render() {
    return (
      <Layout>
        {validateContainer.state.userType === "investor" ? (
          <InvestorDividend />
        ) : (
          <Dividend />
        )}
      </Layout>
    );
  }
}
