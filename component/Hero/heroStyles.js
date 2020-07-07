import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    position: "relative",
    color: "white",
    minHeight: "900px",
    height: "100vh",
    overflow: "hidden",
  },
  multiColor: {
    background:
      "linear-gradient(to bottom,#e64741 0%,#e6255d 100%,#7db9e8 100%)",
    height: "100%",
    width: "100%",
    "& img": {
      position: "absolute",
      top: "35%",
      left: "14%",
    },
  },
  blackBox: {
    position: "absolute",
    top: "-10px",
    right: "-1050px",
    height: "2000px",
    width: "2000px",
    transform: "rotate(120deg)",
    background: "black",
  },
  overLay: {
    position: "absolute",
    top: "300px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& img": {
      height: "200px",
    },
    "& h1": {
      fontSize: "3.5rem",
      textTransform: "capitalize",
    },
  },
});
