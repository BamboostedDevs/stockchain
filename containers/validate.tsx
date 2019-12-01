import { Container } from "unstated";

type State = {
  isLogged: boolean;
};

export class ValidateContainer extends Container<State> {
  constructor() {
    super();

    this.state = {
      isLogged: false
    };
  }
}

const validateContainer = new ValidateContainer();
export default validateContainer;
