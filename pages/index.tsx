import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import { Home, Sidebar, Investor, Emitter } from "../components/Segments";

type State = {
  size: boolean | "large" | "medium" | "small";
};
type Props = {
  children: any
}

export default class Main extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { size: false };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    const height = window.innerHeight;
    const width = window.innerWidth;
    size = sizeContainer.changeSize(height, width)
    this.setState({ size: size });
  }
  render() {
    return (
      <Layout>
        <Home size={this.state.size} />
        <Sidebar>
          <Investor />
        </Sidebar>
      </Layout>
    );
  }
}
