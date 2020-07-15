import clsx from "clsx";
import FastForwardIcon from "@material-ui/icons/FastForward";

import { useStyles } from "./blogStyles";

export default function Blog() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="blog">
      <h2>Our Blog</h2>
      <p>
        A frequent, chronological publication of personal thoughts and Web
        links.
      </p>
      <div className={classes.blogContainer}>
        <div className={clsx(classes.cardOne, classes.card)}>
          <img src="/blog-logo.png" alt="blog icon" />
          <div className={classes.cardInfo}>
            <h4>Opening New Doors for..</h4>
            <p className={classes.content}>
              When a group of ambitious designers meet, you know something hot
              is brewing. Take a closer look and you'll find them murmuring
              away..
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardTwo, classes.card)}>
          <img src="/blog-logo.png" alt="blog icon" />
          <div className={classes.cardInfo}>
            <h4>Is Your Content Strategy Playing..</h4>
            <p className={classes.content}>
              Compelling creative assets play a major role in the success of
              your Paid Customer Acquisition program..
            </p>
          </div>
        </div>
        <div className={clsx(classes.cardThree, classes.card)}>
          <img src="/blog-logo.png" alt="blog icon" />
          <div className={classes.cardInfo}>
            <h4>Glocalization Helps Small..</h4>
            <p className={classes.content}>
              At Position², we combine creative thinking and best practices for
              each channel to develop engaging and effective assets to enhance
              your brand..
            </p>
          </div>
        </div>
      </div>
      <a className={classes.btn}>
        <span>
          Read More <FastForwardIcon />
        </span>
      </a>
    </section>
  );
}
