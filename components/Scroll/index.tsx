import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
//@ts-ignore
import IsVisible from "react-is-visible";
import { Row, Col } from "react-bootstrap";

type List = {
  name: string;
  logo: string;
  bid: number;
  ask: number;
  percent?: string;
};

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
              style={
                this.state.selected == idx
                  ? styles.selected
                  : this.state.selected == -1
                  ? top == idx
                    ? styles.tileTop
                    : styles.tile
                  : styles.tile
              }
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
                    <Typography
                      variant="h6"
                      component="h3"
                      style={{
                        paddingTop: "10%",
                        paddingLeft: "10%",
                        color: "white"
                      }}
                    >
                      <Row style={{ marginRight: 0 }}>
                        <Col>
                          <img
                            src={val.logo}
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
                            marginLeft: "-10%",
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
                        {val.percent ? (
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
                            {val.percent}
                          </Col>
                        ) : (
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
                            Ico
                          </Col>
                        )}
                      </Row>
                    </Typography>
                  );
                }}
              </IsVisible>
            </Paper>
          );
        })}
      </div>
    );
  }
}
