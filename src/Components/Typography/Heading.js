import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ variant, children, ...rest }) => {
  return (
    <Typography variant={variant ? variant : "h3"} {...rest}>
      {children}
    </Typography>
  );
};
export default Heading;
