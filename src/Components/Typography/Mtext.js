import { Typography } from "@mui/material";
import React from "react";

const Mtext = ({ children, ...rest }) => {
  return (
    <Typography variant="subtitle1" {...rest}>
      {children}
    </Typography>
  );
};
export default Mtext;
