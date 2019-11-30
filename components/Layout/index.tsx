import React, { PureComponent } from "react";
import { Provider, Subscribe } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";
import sizeContainer from "../../containers/size";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

type Props = {
  children: any;
};

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
});

export default class Layout extends PureComponent<Props> {

  componentDidMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    sizeContainer.changeSize(height, width);
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>StockChain</title>
        </Head>
        <Provider>
          <ThemeProvider theme={theme}>
            <Subscribe to={[sizeContainer]}>{container => children}</Subscribe>
          </ThemeProvider>
        </Provider>
        <style jsx global>{`
          body {
            background-color: rgb(73, 158, 249);
          }
          img {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .no-select {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </>
    );
  }
}
