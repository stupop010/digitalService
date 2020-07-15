import { makeStyles, styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";

export const MultiColor = styled(motion.div)(({ theme }) => ({
  background: "linear-gradient(to bottom,#e64741 0%,#e6255d 100%,#7db9e8 100%)",
  height: "100%",
  width: "100%",
}));

export const BlackBox = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: "-10px",
  right: "-1050px",
  height: "2000px",
  width: "2000px",
  background: "black",
  [theme.breakpoints.down("md")]: {
    right: "-1200px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const ScrollMouseContainer = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translate(-50%)",
  "&:hover": {
    cursor: "pointer",
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    color: "white",
    minHeight: "900px",
    height: "100vh",
    overflow: "hidden",
  },
  overLay: {
    position: "absolute",
    top: "300px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      top: "200px",
    },
    "& img": {
      height: "200px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    "& h1": {
      fontSize: "3.5rem",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "5rem",
        margin: 0,
      },
    },
  },
  nav: {
    display: "none",
    position: "absolute",
    top: 0,
    width: "100%",
    background: "#E64741",
    "& img": {
      height: "70px",
      padding: "0.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
