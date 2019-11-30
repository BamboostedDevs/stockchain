import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ImportExportIcon from '@material-ui/icons/ImportExport';
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

      >
        <Grid container style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          marginLeft: "2vw",
          marginBottom: "2vh"
        }} spacing={1} alignItems="flex-end">
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
        <Button variant="contained" style={{
          color: "rgb(192,192,192)",
          backgroundColor: "rgb(7,71,166)",
          position: "fixed",
          bottom: 0,
          right: 0,
          width: "20vw",
          marginBottom: "2.5vh",
          marginRight: "2vw"
        }}>
          <ImportExportIcon></ImportExportIcon> Sort
        </Button>
      </div>
    );
  }
}
