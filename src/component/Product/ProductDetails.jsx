import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Typography,
  Container,
  Rating,
  Card,
  Divider,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import Toast from "../Toast/Toast";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductReviews from "./ProductReview";
import "./productDetail.css";
import Loader from "../Loader/Loader";
import { addItemsToCart } from "../../actions/cartAction";
import Header from "../layout/Header/Header";
import { useState } from "react";
import { NEW_REVIEW_RESET } from "../../constants/productConstants";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
  size: window.innerWidth < 600 ? 13 : 25,
};
const Img = styled("img")({
  margin: "none",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  height: "auto",
  width: "100",
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  paddingLeft: "20px",
  color: theme.palette.text.secondary,
}));

const ProdcutDetails = ({ match }) => {
  const params = useParams();

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { cartItems } = useSelector((state) => state.cart);

  const { success, error: reviewError } = useSelector(
    (state) => state.newReviews
  );
  const itemPresent = cartItems.find((item) => item.product === product._id);
  console.log(
    cartItems.filter((item) => item.product === product._id),
    "items",
    itemPresent
  );

  const [productCount, setProductCount] = React.useState(1);
  const [rating, setRating] = useState(1);
  const [open, setOpen] = useState(false);

  const [comment, setComment] = useState("");

  const handleMinuse = () => {
    if (productCount <= 1) return;
    setProductCount(productCount - 1);
  };
  const handlePluse = () => {
    if (product.stock <= productCount) return;
    setProductCount(productCount + 1);
  };

  const submitReviewtoggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(params.id, productCount));
    Toast("Item Added to Cart Successfully", "Success");
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    dispatch(getProductDetails(params.id));
    dispatch({ type: NEW_REVIEW_RESET });

    if (success) {
      Toast("Review Submitted Successfully", "Success");
      dispatch({ type: NEW_REVIEW_RESET });
    }
  }, [dispatch, params, success]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Container sx={{ marginTop: "50px" }}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Card>
                  <Carousel>
                    {product?.images &&
                      product.images.map((item, i) => (
                        <Img
                          alt={`${i} Slide`}
                          src={item.url}
                          key={item.url}
                          className="img"
                        />
                      ))}
                  </Carousel>
                </Card>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Item>
                  <Typography variant="h3" className="name">
                    {product?.name}
                  </Typography>
                  <Divider />
                  <div className="review">
                    <Rating
                      // name="simple-controlled"
                      value={product?.reviews?.length}
                      readOnly
                    />
                    <Typography>({product?.reviews?.length}Reviews)</Typography>
                  </div>
                  <Divider />

                  <div className="price">
                    <Typography>
                      RS:<span>{product?.price}</span>
                    </Typography>
                  </div>
                  <div className="no-of-items">
                    <button onClick={handleMinuse}>-</button>
                    <input value={productCount} readOnly={true} />
                    <button onClick={handlePluse}>+</button>

                    <button
                      // disabled={product.stock <= productCount}
                      disabled={
                        itemPresent?.stock <= productCount &&
                        product?.stock <= productCount
                      }
                      className="add-to-cart  "
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="status">
                    <p>
                      Status:
                      <b
                        style={{
                          color: product?.stock < 1 ? "red" : "green",
                          marginLeft: "10px",
                        }}
                      >
                        {product?.stock < 1 ? "OutOfStock" : "InStock"}
                      </b>
                    </p>
                  </div>

                  <div className="des">
                    <Typography varient="h1" className="description">
                      Description
                    </Typography>
                    <div>{product?.description}</div>
                  </div>
                  <button
                    onClick={submitReviewtoggle}
                    className="submit-button"
                  >
                    Submit Review
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={2}>
              <div className="review-heading">
                <Typography variant="h5">Product Reviews</Typography>
                <Dialog
                  aria-labelledby="simple-dialog-title"
                  open={open}
                  onClose={submitReviewtoggle}
                >
                  <DialogTitle>Submit Review</DialogTitle>
                  <DialogContent className="submit-dialog">
                    <Rating
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                    />
                    <textarea
                      className="dialog-text-area"
                      cols="30"
                      rows="5"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <DialogActions>
                      <Button color="secondary" onClick={submitReviewtoggle}>
                        Cancel
                      </Button>
                      <Button onClick={reviewSubmitHandler}>Submit</Button>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
                <Grid item sm={10} xs={2}>
                  {product?.reviews?.length ? (
                    <div className="reviews">
                      {product.reviews.map((reviews) => (
                        <ProductReviews reviews={reviews} />
                      ))}
                    </div>
                  ) : null}
                </Grid>
              </div>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default ProdcutDetails;
