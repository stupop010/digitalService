import Box from "@material-ui/core/Box";

import { useStyles } from "./heroStyles";

export default function Hero() {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      <div className={classes.multiColor} />
      <div className={classes.blackBox} />

      <div className={classes.overLay}>
        <img src="/logo.png" alt="Digital Service Logo" />
        <h1>
          technology
          <br />
          meets
          <br />
          creativity
        </h1>
      </div>
    </Box>
  );
}
