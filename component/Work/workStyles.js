import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#414143",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "4rem",
    paddingBottom: "3rem",
    color: "white",
    "& h2": {
      fontSize: "4rem",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "640px",
    "& img": {
      height: "200px",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "space-around",
    },
  },
}));
