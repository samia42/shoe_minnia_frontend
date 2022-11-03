import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import "./success.css";

function Success(props) {
  const navigate = useNavigate();
  return (
    <Container className="success-container">
      <Box className="success-box">
        <CheckBoxIcon sx={{ color: "blue", width: "35px", height: "35px" }} />
        <Typography>Order Placed Successfully</Typography>
        <Button variant="contained">
          <Link to="/order" sx={{ color: "white" }}>
            View Your Order
          </Link>
        </Button>

        <Button variant="contained" onClick={() => navigate("/")}>
          Back to home
        </Button>
      </Box>
    </Container>
  );
}

export default Success;
