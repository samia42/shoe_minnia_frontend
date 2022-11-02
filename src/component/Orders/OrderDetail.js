import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getOrdersDetails } from "../../actions/orderAction";
import "./order.css";

function OrderDetail(props) {
  const location = useParams();

  const { loading, error, order } = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();
  console.log(order);
  useEffect(() => {
    // if (error)
    // {
    //   alert(error)
    //   dispatch(clearErrors())
    // }
    dispatch(getOrdersDetails(location.id));
  }, [dispatch]);

  return (
    <Container className="order-detail-container">
      <Box>
        <Typography>Order Id #{order?._id}</Typography>
      </Box>
      <Box>
        <Typography>Shipping Info</Typography>
        <Typography>{order?.shippingInfo?.address}</Typography>
        <Typography>{order?.shippingInfo?.city}</Typography>
        <Typography>{order?.shippingInfo?.state}</Typography>
        <Typography>{order?.shippingInfo?.phoneNo}</Typography>
      </Box>
      <Box>
        {order?.orderItems &&
          order?.orderItems.map((item) => (
            <>
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
              <img src={item.image} alt="image" />
            </>
          ))}
      </Box>
      <Box>
        <Typography>Total Price</Typography>
        {order?.totalPrice}
      </Box>
    </Container>
  );
}

export default OrderDetail;
