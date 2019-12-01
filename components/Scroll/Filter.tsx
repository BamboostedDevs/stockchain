import React, { Component } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { Row } from "react-bootstrap";
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
  }
  render() {
    return (
      <div
        style={{ position: "fixed", bottom: 0, zIndex: 999 }}
      >
        <Row style={{ marginRight: 0, marginLeft: 0, width: "100vw" }}>
          <Grid container style={{
            bottom: 0,
            left: 0,
            marginLeft: "2vw",
            marginBottom: "2vh",
            marginRight: 0,
            maxWidth: "60vw"
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
          <div style={{
            bottom: 0,
            right: 0,
            marginBottom: "2.5vh",
            marginRight: "5vw",
            color: "white",
            marginTop: "2vh"
          }}>
            <ImportExportIcon></ImportExportIcon> Sort
        </div>
        </Row>
      </div>
    );
  }
}
