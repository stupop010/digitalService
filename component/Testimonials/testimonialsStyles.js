import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  section: {
    background: "white",
    padding: "3rem 0",
  },
  root: {
    maxWidth: "1140px",
    margin: "auto",
    textAlign: "center",
    "& h2": {
      fontSize: "4rem",
      margin: 0,
    },
    "& > p": {
      fontSize: "1rem",
      textAlign: "center",
    },
  },
  testimonials: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    margin: "4rem 0 1.1rem 0",
  },
  card: {
    maxWidth: "320px",
  },
  division: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    "& > span": {
      fontSize: "3.5rem",
      fontWeight: 600,
      color: "#F86B74",
    },
  },
  divisionTitle: {
    marginLeft: "1rem",
    paddingLeft: "1rem",
    borderLeft: "4px solid #89cbbf",
    "& h3": {
      fontSize: "1.8rem",
      fontWeight: "400",
    },
    "&  *": {
      margin: 0,
    },
  },
  testCard: {
    background: `linear-gradient(
        rgba(19, 89, 89, 0.9), 
        rgba(19, 89, 89, 0.9)
      ),url('./computer.jpg')`,
    backgroundSize: "cover",
    position: "relative",
    color: "white",
    padding: "1rem 1.5rem",
    "& p": {
      fontSize: "1.1rem",
    },
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  },
  medium: {
    height: "4rem",
    width: "4rem",
  },
  textPerson: {
    "& h6": {
      fontSize: "0.8rem",
    },
    "& *": {
      margin: 0,
    },
  },
}));
