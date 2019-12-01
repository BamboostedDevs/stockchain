import React, { PureComponent } from "react";
import { Provider, Subscribe } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";
import sizeContainer from "../../containers/size";
import validateContainer from "../../containers/validate";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Sidebar, EmitterSidebar, Investor } from "../Segments";

type Props = {
  children: any;
};

type State = {
  isLogged: boolean | string | null;
  userType: "emitter" | "investor" | null | undefined | string;
};

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default class Layout extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLogged: false,
      userType: undefined,
      window: undefined
    };
  }

  componentDidMount() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    sizeContainer.changeSize(height, width);
    const isLogged = window.sessionStorage.getItem("isLogged");
    const userType = window.sessionStorage.getItem("userType");
    this.setState({ isLogged, userType });

    console.log(
      window.sessionStorage.getItem("isLogged"),
      window.sessionStorage.getItem("userType")
    );
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
            {this.state.isLogged === "true" ? (
              <Sidebar>
                {this.state.userType === "investor" ? (
                  <Investor />
                ) : (
                    <EmitterSidebar />
                  )}
              </Sidebar>
            ) : (
                ""
              )}
            <Subscribe to={[sizeContainer]}>{container => children}</Subscribe>
          </ThemeProvider>
        </Provider>
        <style jsx global>{`
          .blockOfTile {
            background: linear-gradient(
              rgba(0, 176, 255, 1) 0%,
              rgba(7, 71, 166, 1) 100%
            );
            transition: 0.5s;
          }
          body {
            background-color: rgb(96, 99, 104);
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
