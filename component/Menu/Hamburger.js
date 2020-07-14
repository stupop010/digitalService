import { mergeClasses } from "@material-ui/styles";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "./menuStyles";

export default function Hamburger({ open, setOpen }) {
  const classes = useStyles(open);
  return (
    <div className={classes.hamburger} onClick={() => setOpen(!open)}>
      {open ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
}
