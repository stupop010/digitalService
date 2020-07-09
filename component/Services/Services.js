import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { useStyles } from "./servicesStyles";

const data = [
  {
    id: 1,
    avatar: "/marketing.jpg",
    title: "Digital Marketing",
    info:
      "At a high level, digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. While this term covers a wide range of marketing activities, all of which are not universally agreed upon, we'll focus on the most common types below.",
  },
  {
    id: 2,
    avatar: "/webDev.jpg",
    title: "Web design & Development",
    info:
      "For businesses today, it's not just about having a website. It's about having an effective, multifunctional portal that plays a crucial marketing role. Whether your business is B2B, B2C or both, your website should spearhead your Demand Acceleration by inviting, informing and engaging your target audience.",
  },
  {
    id: 3,
    avatar: "/network.jpg",
    title: "Web Hosting",
    info:
      "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed in the Internet.",
  },
];

export default function Services() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h2">Our digital services</Typography>
      <div className={classes.cardContainer}>
        {data.map((d) => (
          <div key={d.id} className={classes.card}>
            <Avatar src={d.avatar} className={classes.avatar} />
            <Typography variant="h3">{d.title}</Typography>
            <p>{d.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
