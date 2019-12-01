import React, { Component } from "react";
import { Paper, Typography, AppBar, Toolbar } from "@material-ui/core";
//@ts-ignore
import IsVisible from "react-is-visible";
import { Row, Col } from "react-bootstrap";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CallReceivedIcon from "@material-ui/icons/CallReceived";

type List = { name: string; logo: string; bid: number; ask: number };

type Props = {
  List: List[];
};

function uniq(a: number[]) {
  return Array.from(new Set(a));
}

function getTop(a: any) {
  const min = Math.min(...a);
  return min == Infinity ? 0 : min;
}

const styles = {
  tile: {
    height: "80vh",
    marginBottom: "-65vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  },
  tileTop: {
    height: "80vh",
    marginBottom: "-45vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  },
  selected: {
    height: "80vh",
    marginBottom: "-5vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.5s"
  }
};

type State = {
  visible: number[];
  selected: number;
};

export default class Scroll extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      visible: [],
      selected: -1
    };
  }

  render() {
    const { List } = this.props;
    return (
      <div>
        {List.map((val, idx) => {
          var top = getTop(this.state.visible);
          return (
            <Paper
              key={idx + "-tile"}
              className="blockOfTile"
              style={{
                ...(this.state.selected == idx
                  ? styles.selected
                  : this.state.selected == -1
                    ? top == idx
                      ? styles.tileTop
                      : styles.tile
                    : styles.tile),
                ...{ zIndex: idx, position: "relative" },
                maxWidth: "100vw"
              }}
              onClick={() =>
                this.state.selected != idx
                  ? this.setState({ selected: idx })
                  : this.setState({ selected: -1 })
              }
            >
              <IsVisible>
                {(IsVisible: boolean) => {
                  if (IsVisible == true && !this.state.visible.includes(idx)) {
                    var list = uniq(this.state.visible);
                    !list.includes(idx) && list.push(idx);
                    !this.state.visible.includes(idx) &&
                      this.setState({ visible: list });
                  } else if (
                    IsVisible == false &&
                    this.state.visible.includes(idx)
                  ) {
                    var list = uniq(this.state.visible);
                    const toRemove = list.indexOf(idx);
                    toRemove > -1 &&
                      list.splice(toRemove, 1) &&
                      this.setState({ visible: uniq(list) });
                  }
                  return (
                    <Col>
                      <Row style={{ marginRight: 0, paddingTop: "10%", paddingLeft: "10%" }}>
                        <Col>
                          <img
                            src="/icon.png"
                            width={
                              (this.state.selected == -1 ||
                                this.state.selected == idx) &&
                                (top == idx || this.state.selected == idx)
                                ? "75"
                                : "50"
                            }
                            height={
                              (this.state.selected == -1 ||
                                this.state.selected == idx) &&
                                (top == idx || this.state.selected == idx)
                                ? "75"
                                : "50"
                            }
                            style={{
                              marginTop:
                                (this.state.selected == -1 ||
                                  this.state.selected == idx) &&
                                  (top == idx || this.state.selected == idx)
                                  ? "-10%"
                                  : "-5%",
                              transitionDuration: "0.2s"
                            }}
                          ></img>
                        </Col>
                        <Col
                          style={{
                            marginLeft: "-12.5%",
                            transitionDuration: "0.2s",
                            fontSize:
                              (this.state.selected == -1 ||
                                this.state.selected == idx) &&
                                (top == idx || this.state.selected == idx)
                                ? "1.5rem"
                                : "1.25rem"
                          }}
                        >
                          {val.name}
                        </Col>
                        <Col
                          style={{
                            marginLeft: "5vw",
                            marginRight: 0,
                            transitionDuration: "0.2s",
                            fontSize:
                              (this.state.selected == -1 ||
                                this.state.selected == idx) &&
                                (top == idx || this.state.selected == idx)
                                ? "1.5rem"
                                : "1.25rem"
                          }}
                        >
                          {idx % 2 == 0 ? (
                            <CallMadeIcon style={{ color: "green" }} />
                          ) : (
                              <CallReceivedIcon style={{ color: "red" }} />
                            )}
                        </Col>
                      </Row>
                      <Row style={{ maxWidth: "100vw", }}>
                        <Col style={{ marginTop: "5vh", marginLeft: "5vw", justifyContent: "center", }}>
                          <Typography variant="h6" style={{ justifyContent: "center", paddingLeft: "30%" }}>
                            Bids:
                            <Typography style={{ paddingLeft: "5vw", paddingTop: "3vh" }}>
                              <Row>14651</Row><Row>15006</Row><Row>15150</Row><Row>15201</Row><Row>15341</Row><Row>15432</Row><Row>15678</Row>
                            </Typography>
                          </Typography>
                        </Col>
                        <Col style={{ marginTop: "5vh", marginLeft: "5vw", justifyContent: "center" }}>
                          <Typography variant="h6" style={{ justifyContent: "center", paddingRight: "30%" }}>

                            Asks:
                            <Typography style={{ paddingLeft: "5vw", paddingTop: "3vh" }}>
                              <Row >14200</Row><Row>14000</Row><Row>13500</Row><Row>13000</Row><Row>12700</Row><Row>12500</Row><Row>12100</Row>
                            </Typography>
                          </Typography>
                        </Col>
                      </Row>
                    </Col>
                  );
                }}
              </IsVisible>
            </Paper>
          );
        })
        }
      </div >
    );
  }
}
