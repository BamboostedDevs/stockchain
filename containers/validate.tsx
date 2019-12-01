import { Container } from "unstated";

type State = {
  isLogged: boolean;
  userType: "emitter" | "investor" | null | undefined;
};

export class ValidateContainer extends Container<State> {
  constructor() {
    super();

    this.state = {
      isLogged: true,
      userType: "emitter"
    };
  }
}

const validateContainer = new ValidateContainer();
export default validateContainer;
