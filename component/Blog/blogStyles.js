import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    paddingBottom: "2rem",
    "& h2": {
      fontSize: "4rem",
      marginBottom: 0,
    },
    "& p": {
      width: "300px",
      textAlign: "center",
      fontSize: "0.9rem",
    },
  },
  blogContainer: {
    width: "1200px",
    height: "500px",
    position: "relative",
    margin: "2rem 0",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translate(-50%)",
      height: "100%",
      width: "1px",
      border: "1px solid black",
    },
  },
  card: {
    width: "500px",
    display: "flex",
    "& img": {
      height: "50px",
    },
  },
  cardOne: {
    position: "absolute",
    top: 0,
    left: "7%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: "-21px",
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      background: "purple",
    },
  },
  cardTwo: {
    position: "absolute",
    top: "39%",
    right: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "-21%",
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      background: "purple",
    },
  },
  cardThree: {
    position: "absolute",
    bottom: 0,
    left: "7%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: "-21px",
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      background: "purple",
    },
  },
  cardInfo: {
    marginLeft: ".5rem",
    "& h4": {
      fontSize: "1.1rem",
      margin: 0,
    },
  },

  content: {
    position: "relative",
    marginTop: "5px",
    marginLeft: "40px",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "5px",
      left: "-40px",
      width: "36px",
      border: "1px solid black",
      background: "black",
    },
  },
});
