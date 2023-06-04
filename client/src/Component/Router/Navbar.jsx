import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { Box, Typography, Button as MuiButton, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function NavBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: isMobile ? "center" : "right",
  };

  const aStyle = {
    color: "white",
    marginRight: isMobile ? "0" : "20px",
    textDecoration: "none",
  };

  return (
    <Box style={divStyle}>
      <Typography variant="h3" component="h3" style={aStyle}>
        Real Time CRUD
      </Typography>

      <Link style={aStyle} to="/">
        <MuiButton variant="contained" color="success">
          GET
        </MuiButton>
      </Link>

      <Link style={aStyle} to="/post">
        <MuiButton variant="contained" color="success">
          POST
        </MuiButton>
      </Link>

      <Link style={aStyle} to="/put">
        <MuiButton variant="contained" color="success">
          PUT
        </MuiButton>
      </Link>

      <Link style={aStyle} to="/patch">
        <MuiButton variant="contained" color="success">
          PATCH
        </MuiButton>
      </Link>

      <Link style={aStyle} to="/delete">
        <MuiButton variant="contained" color="success">
          DELETE
        </MuiButton>
      </Link>
    </Box>
  );
}

export default NavBar;
