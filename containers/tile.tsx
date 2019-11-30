import { Container } from "unstated";

type State = {
  visible: number[];
};

export class TileContainer extends Container<State> {
  constructor() {
    super();
    this.state = { visible: [] };
  }

  visible(id: number) {
    var list = this.state.visible.slice(0);
    !list.includes(id) && list.push(id);
    !this.state.visible.includes(id) && this.setState({ visible: list });
  }

  invisible(id: number) {
    var list = this.state.visible.slice(0);
    const toRemove = list.indexOf(id);
    toRemove > -1 &&
      list.splice(toRemove, 1) &&
      this.setState({ visible: list });
  }

  getTop() {
    const min = Math.min(...this.state.visible);
    return min == Infinity ? 0 : min;
  }
}

const tileContainer = new TileContainer();
export default tileContainer;
