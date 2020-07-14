import { Avatar } from "@material-ui/core";
import clsx from "clsx";

import { useStyles } from "./testimonialsStyles";

export default function Testimonials() {
  const classes = useStyles();
  return (
    <section className={classes.section} id="testimonial">
      <div className={classes.root}>
        <h2>Testimonials</h2>
        <p>
          I just wanted to take a moment to appreciate the great work you guys
          are doing for our web projects. Thanks for your abundant patience and
          technical support whenever required, even during the odd hours.
        </p>
        <div className={classes.testimonials}>
          <div className={classes.card}>
            <div className={classes.division}>
              <span>03.</span>
              <div className={classes.divisionTitle}>
                <h3>Testimonials</h3>
                <p>Read our clients thoughts..</p>
              </div>
            </div>
            <p>
              You have surely made an impression with the awesome above!But,
              here is your chance to make the most of it. Display testimonials
              and boost your website conversions!
            </p>
          </div>
          <div className={clsx(classes.card, classes.testCard)}>
            <p>
              I'm thrilled with the new website that Position2 developed for
              Janrain to reflect our evolution into the leading provider of
              enterprise customer identity and access management solutions.
            </p>
            <div>
              <Avatar src="./person2.jpg" className={classes.medium} />
              <div className={classes.textPerson}>
                <h6>Jayne</h6>
                <h6>President and General Manager</h6>
              </div>
            </div>
          </div>
          <div className={clsx(classes.card, classes.testCard)}>
            <p>
              From a metrics perspective, the amount of efficiency we've been
              able to wring from the Position2 PPC channel in the face of really
              interesting challenges has been phenomenal.
            </p>
            <div>
              <Avatar src="./person1.jpg" className={classes.medium} />
              <div className={classes.textPerson}>
                <h6>Dave</h6>
                <h6>Chief Commercial Officer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
