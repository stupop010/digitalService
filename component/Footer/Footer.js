import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FastForwardIcon from "@material-ui/icons/FastForward";

import { useStyles } from "./footerStyles";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root} id="contact">
      <div>
        <p>If you have an exciting project, feel free to get in touch.</p>
        <a className={classes.btn}>
          <span>
            <EmailIcon fontSize="large" className={classes.email} /> Email Me
            <FastForwardIcon className={classes.fast} />
          </span>
        </a>
      </div>
      <ul className={classes.list}>
        <li>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://uk.linkedin.com/">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="mailto:agentavery@sample.com">
            <EmailIcon />
          </a>
        </li>
      </ul>
      <div className={classes.copyright}>&copy; Copyright 2020 | Stuart</div>
    </footer>
  );
}
