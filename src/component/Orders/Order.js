import { LaunchOutlined, MusicNote } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clearErrors, myOrders } from "../../actions/orderAction";
import { Link } from "react-router-dom";
import "./order.css";

function Order(props) {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);
  console.log(
    orders?.map((item) => item._id),
    "orders"
  );
  useEffect(() => {
    dispatch(myOrders());
  }, [dispatch]);

  return (
    <Fragment>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow className="table-head-row">
              <TableCell>Order ID</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Item Quantity</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Launch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders &&
              orders?.map((order) => (
                <TableRow
                  key={order.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order._id}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color:
                        order.orderStatus === "Processing" ? "red" : "green",
                    }}
                  >
                    {order.orderStatus}
                  </TableCell>
                  <TableCell align="right">
                    {order?.orderItems?.length}
                  </TableCell>
                  <TableCell align="right">{order.totalPrice}</TableCell>
                  <TableCell align="right">
                    <Link to={`/order/${order._id}`}>
                      <LaunchOutlined sx={{ color: "black" }} />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Order;
