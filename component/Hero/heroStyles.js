import { makeStyles, styled } from "@material-ui/core/styles";
import { motion } from "framer-motion";

export const MultiColor = styled(motion.div)({
  background: "linear-gradient(to bottom,#e64741 0%,#e6255d 100%,#7db9e8 100%)",
  height: "100%",
  width: "100%",
});

export const BlackBox = styled(motion.div)({
  position: "absolute",
  top: "-10px",
  right: "-1050px",
  height: "2000px",
  width: "2000px",
  background: "black",
});

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

export const useStyles = makeStyles({
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
    "& img": {
      height: "200px",
    },
    "& h1": {
      fontSize: "3.5rem",
      textTransform: "capitalize",
    },
  },
});
