import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
type Props = {
  List: object[];
};
type State = {
  value: string;
};

export default class Filter extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const { List } = this.props;
    this.setState({ value: event.target.value });
    console.log(event.target.value);
    console.log(List);
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          marginLeft: "2vw",
          marginBottom: "2vh"
        }}
      >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              value={this.state.value}
              onChange={this.handleChange}
              label="Search"
              variant="filled"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
