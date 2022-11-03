import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Link } from "react-router-dom";
import "./success.css";

function Success(props) {
  return (
    <Container className="success-container">
      <Box className="success-box">
        <CheckBoxIcon sx={{ color: "blue", width: "35px", height: "35px" }} />
        <Typography>Order Placed Successfully</Typography>
        
          <Link to="/order" >
          <Button  varient="contained"> View Your Order</Button> 
          </Link>
      </Box>
    </Container>
  );
}

export default Success;
