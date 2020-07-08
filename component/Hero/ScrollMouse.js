import MouseOutlinedIcon from "@material-ui/icons/MouseOutlined";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { ScrollMouseContainer } from "./heroStyles";

export default function ScrollMouse() {
  return (
    <ScrollMouseContainer
      transition={{ delay: 1, duration: 0.5 }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ArrowDropUpIcon fontSize="large" />
      <MouseOutlinedIcon fontSize="large" />
      <ArrowDropDownIcon fontSize="large" />
    </ScrollMouseContainer>
  );
}
