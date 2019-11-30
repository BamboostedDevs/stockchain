import React, { Component } from "react";
import TrackVisibility from "react-on-screen";
import Tile from "./Tile";
import { Paper } from "@material-ui/core";
import tileContainer, { TileContainer } from "../../containers/tile";
import { Subscribe } from "unstated";
import Filter from "./Filter";

type Props = {
  List: object[];
};

const styles = {
  tile: {
    height: "50vh",
    marginBottom: "-35vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  },
  tileTop: {
    height: "50vh",
    marginBottom: "-15vh",
    borderRadius: "7.5vw",
    boxShadow: "0px -2px 10px rgb(7,71,166)",
    transition: "margin-bottom 0.25s"
  }
};

export default class Scroll extends Component<Props> {
  render() {
    const { List } = this.props;
    return (
      <div>
        <Subscribe to={[tileContainer]}>
          {container =>
            List.map((val, idx) => {
              return (
                <Paper
                  key={idx + "-tile"}
                  className="blockOfTile"
                  style={
                    tileContainer.getTop() == idx ? styles.tileTop : styles.tile
                  }
                >
                  <TrackVisibility>
                    <Tile
                      val={val}
                      idx={idx}
                      top={tileContainer.getTop() == idx}
                    />
                  </TrackVisibility>
                </Paper>
              );
            })
          }
        </Subscribe>
        <Filter />
      </div>
    );
  }
}
