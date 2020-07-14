import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    right: (open) => (open ? 0 : "-300px"),
    height: "100vh",
    width: "300px",
    background: "#333F4F",
    boxShadow: "-1px 0px 1px rgb(191, 189, 189)",
    transition: ".3s",
    "& ul": {
      marginTop: "150px",
      textAlign: "end",
    },
    "& ul li": {
      listStyle: "none",
      fontSize: "1.3rem",
      margin: "0.6rem 1rem 0.6rem 0",
      color: "#FFFFFF",
    },
    "& ul li a:hover": {
      cursor: "pointer",
      color: "purple",
    },
    "& a, a:active, a:visited": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  hamburger: {
    zIndex: 2,
    position: "fixed",
    top: "50px",
    right: "50px",
    padding: "0.1rem 0.5rem 0 0.5rem",
    borderRadius: "5px",
    color: "white",
    backgroundColor: (open) => (open ? "purple" : "black"),
    "& svg": {
      fontSize: 50,
    },
    "&:hover": {
      cursor: "pointer",
      background: "purple",
    },
  },
});
