import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import FastForwardIcon from "@material-ui/icons/FastForward";

import { useStyles } from "./footerStyles";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div>
        <p>If you have an exciting project, feel free to get in touch.</p>
        <a>
          <span>
            <EmailIcon /> Email Me <FastForwardIcon className={classes.fast} />
          </span>
        </a>
      </div>
      <div>
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <EmailIcon />
      </div>
      <div>copyright</div>
    </footer>
  );
}
