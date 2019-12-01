import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, ButtonBase, Paper, Typography, Theme } from "@material-ui/core";
import Router from "next/router";
import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
      "&:hover": {
        backgroundColor: "rgba(48,56,69, 0.3)"
      }
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  })
);

const images = [
  {
    url: "/images/businesswoman.jpg",
    title: "Private",
    width: "50%",
    height: "35vh"
  },
  {
    url: "/images/company.jpg",
    title: "Company",
    width: "50%",
    height: "35vh"
  }
];

export default function Landing() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <img
          src="/images/StockChainLogo.png"
          alt="logo"
          height="auto"
          width="80%"
          style={{ paddingTop: "2vh" }}
        ></img>
        <Row style={{ marginTop: "2vh", marginBottom: "2vh" }}>
          <Col>
            <Paper
              onClick={() => Router.push("/login")}
              style={{ width: "35vw", background: "rgb(7,71,166)" }}
            >
              <Typography variant="h6" component="h6" align="center">
                Sign in
              </Typography>
            </Paper>
          </Col>
          <Col>
            <Paper style={{ width: "35vw" }}>
              <Typography variant="h6" component="h6" align="center">
                Sign up as:
              </Typography>
            </Paper>
          </Col>
        </Row>
        <ButtonBase
          focusRipple
          key={images[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[0].width,
            height: images[0].height,
            marginBottom: "2vh"
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[0].url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              onClick={() => Router.push("/private-register")}
            >
              {images[0].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        <ButtonBase
          focusRipple
          key={images[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[1].width,
            height: images[1].height
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[1].url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
              onClick={() => Router.push("/company-register")}
            >
              {images[1].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
    </div>
  );
}
