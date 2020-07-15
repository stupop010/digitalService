import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#333F4F",
    textAlign: "center",
    paddingTop: "2rem",
    color: "#C7C5CA",
    "& p": {
      maxWidth: "600px",
      margin: "auto",
      fontSize: "2.5rem",
    },
  },
  btn: {
    color: "#fff",
    backgroundColor: "#f46674",
    padding: "12px 30px",
    margin: "1.7rem 0",
    display: "inline-block",
    borderRadius: "6px",
    fontSize: "28px",
    width: "240px",
    "& span": {
      display: "inline-block",
      position: "relative",
      transition: ".3s",
    },
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover span": {
      paddingRight: "18px",
    },
    "&:hover span :last-child": {
      opacity: 1,
      right: "-8px",
    },
  },
  email: {
    position: "relative",
    top: "7px",
    left: 0,
  },
  fast: {
    position: "absolute",
    top: "30%",
    right: "-25px",
    opacity: 0,
    transition: ".3s",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    "& a, a:active, a:visited": {
      color: "inherit",
    },
    "& li": {
      listStyle: "none",
    },
    "& li svg": {
      margin: "0.5rem 0.6rem",
      fontSize: "3.5rem",
    },
    "& li svg:hover": {
      cursor: "pointer",
      transform: "scale(1.3)",
    },
  },
  copyright: {
    marginTop: "1rem",
    padding: "0.7rem 0",
    background: "black",
  },
}));
