import { Typography } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import tileContainer from "../../containers/tile";

export default function Tile({ isVisible, val, idx, top }: any) {
  isVisible == true
    ? tileContainer.visible(idx)
    : isVisible == false && tileContainer.invisible(idx);
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
            src="/icon.png"
            width={top ? "75" : "50"}
            height={top ? "75" : "50"}
            style={{
              marginTop: top ? "-10%" : "-5%",
              transitionDuration: "0.2s"
            }}
          ></img>
        </Col>
        <Col
          style={{
            marginLeft: "-12.5%",
            transitionDuration: "0.2s",
            fontSize: top ? "1.5rem" : "1.25rem"
          }}
        >
          {val.name}
        </Col>
        <Col
          style={{
            marginLeft: "5vw",
            marginRight: 0,
            transitionDuration: "0.2s",
            fontSize: top ? "1.5rem" : "1.25rem"
          }}
        >
          Ico
        </Col>
      </Row>
    </Typography>
  );
}
