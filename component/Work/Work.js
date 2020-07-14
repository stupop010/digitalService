import { useStyles } from "./workStyles";

export default function Work() {
  const classes = useStyles();
  return (
    <section className={classes.root} id="work">
      <h2>Our Work</h2>
      <div className={classes.imgContainer}>
        {logos.map((logo, i) => (
          <img src={logo} key={i} alt={logo} />
        ))}
      </div>
    </section>
  );
}

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];
