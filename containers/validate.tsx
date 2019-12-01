import { Container } from "unstated";

type State = {
  isLogged: boolean;
  userType: "emitter" | "investor" | null | undefined;
};

export class ValidateContainer extends Container<State> {
  constructor() {
    super();

    this.state = {
      isLogged: false,
      userType: "investor"
    };
  }

  changeType(userType: "emitter" | "investor" | null | undefined) {
    this.setState({ userType });
  }

  checkIfLogged(isLogged: boolean) {
    this.setState({ isLogged });
  }
}

const validateContainer = new ValidateContainer();
export default validateContainer;
