import Box from "@material-ui/core/Box";
import { motion } from "framer-motion";

import ScrollMouse from "./ScrollMouse";

import { useStyles, MultiColor, BlackBox } from "./heroStyles";

export default function Hero() {
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <MultiColor
        transition={{ duration: 0.5 }}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
      />

      <BlackBox
        transition={{ delay: 0.3, duration: 0.5 }}
        initial={{ x: "100%", rotate: 120 }}
        animate={{ x: 0 }}
      />

      <div className={classes.overLay}>
        <motion.img
          src="/logo.png"
          alt="Digital Service Logo"
          transition={{ delay: 0.1, duration: 0.5 }}
          initial={{ y: "-200%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />
        <motion.h1
          transition={{ delay: 0.9, duration: 0.5 }}
          initial={{ x: "200%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          technology
          <br />
          meets
          <br />
          creativity
        </motion.h1>
      </div>
      <ScrollMouse />
    </Box>
  );
}
