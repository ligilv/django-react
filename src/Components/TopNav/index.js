import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Heading } from "../Typography";

export default function TopNav() {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
      <AppBar position="static" style={{ backgroundColor: "#9ADCFF" }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Heading variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </Heading>
          <Button color="inherit">
            <Link to="/Login" style={{ color: "red" }}>
              <Heading variant={"h4"}>Login</Heading>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
