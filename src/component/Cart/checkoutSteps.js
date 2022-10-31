import {
  AccountBalance,
  LibraryAddCheck,
  LocalShippingOutlined,
} from "@mui/icons-material";
import { Typography, Stepper, StepLabel, Step } from "@mui/material";
import React from "react";
import { Fragment } from "react";

function CheckoutSteps({ activeStep }) {
  console.log(activeStep, "active step");
  const steps = [
    {
      label: <Typography>Shipping Detail</Typography>,
      icon: <LocalShippingOutlined></LocalShippingOutlined>,
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <LibraryAddCheck />,
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalance />,
    },
  ];
  const stepStyle = {
    boxSizing: "border-box",
  };
  return (
    <Fragment>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyle}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activeStep >= index ? "gray" : "rgba(0,0,0.49)",
              }}
              icon={item.icon}
            >
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Fragment>
  );
}

export default CheckoutSteps;
