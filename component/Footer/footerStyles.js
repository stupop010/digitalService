import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
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
    "& a": {
      color: "#fff",
      backgroundColor: "#f46674",
      padding: "12px 30px",
      display: "inline-block",
      borderRadius: "6px",
      fontSize: "28px",
      width: "240px",
      "&:hover": {
        cursor: "pointer",
      },
      "&:hover span": {
        paddingRight: "10px",
      },
      "&:hover svg": {
        opacity: 1,
      },
    },
  },
  fast: {
    position: "absolute",
    top: "30%",
    right: "10px",
    opacity: 0,
  },
});
