import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function NavBar(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={divStyle}>
        <h1 style={aStyle}>All Real Time CRUD Operations </h1>

        <Link style={aStyle} to="/">
          <Button variant="success">GET</Button>
        </Link>

        <Link style={aStyle} to="/post">
          <Button variant="success">POST</Button>
        </Link>

        <Link style={aStyle} to="/put">
          <Button variant="success">PUT</Button>
        </Link>

        <Link style={aStyle} to="/patch">
          <Button variant="success">PATCH</Button>
        </Link>

        <Link style={aStyle} to="/delete">
          <Button variant="success">DELETE</Button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
