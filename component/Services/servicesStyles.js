import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4rem",
    "& h2": {
      fontSize: "4rem",
    },
    [theme.breakpoints.down("sm")]: {
      "& h2": {
        fontSize: "3rem",
      },
    },
  },
  cardContainer: {
    marginTop: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      "& > div": {
        margin: "0.5rem 0",
      },
    },
  },
  card: {
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    "& h3": {
      fontSize: "2rem",
      margin: "1.4rem 0",
    },
    "& p": {
      fontSize: "1rem",
      wordSpacing: "-0.1rem",
      margin: 0,
    },
  },
  avatar: {
    height: "8rem",
    width: "8rem",
  },
}));
