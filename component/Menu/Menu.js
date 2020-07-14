import { useState } from "react";
import Hamburger from "./Hamburger";

import { useStyles } from "./menuStyles";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const classes = useStyles(open);
  return (
    <>
      <div className={classes.root}>
        <ul>
          <li>
            <a href="#digital" onClick={() => setOpen(!open)}>
              Our digital services
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => setOpen(!open)}>
              Our Work
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setOpen(!open)}>
              Our Blog
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={() => setOpen(!open)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(!open)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <Hamburger open={open} setOpen={setOpen} />
    </>
  );
}
