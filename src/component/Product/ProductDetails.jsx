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
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { getProductDetails } from "../../actions/productAction";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductReviews from "./ProductReview";
import "./productDetail.css";
import Loader from "../Loader/Loader";
import { addItemsToCart } from "../../actions/cartAction";
import Header from "../layout/Header/Header";

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

  const [productCount, setProductCount] = React.useState(1);
  const handleMinuse = () => {
    if (productCount <= 1) return;
    setProductCount(productCount - 1);
  };
  const handlePluse = () => {
    if (product.stock <= productCount) return;
    setProductCount(productCount + 1);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(params.id, productCount));
    alert("item added to cart");
  };

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, [dispatch, params]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header/>
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
                    {product.name}
                  </Typography>
                  <Divider />
                  <div className="review">
                    <Rating
                      name="simple-controlled"
                      value={product?.reviews?.length}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                    <Typography>({product?.reviews?.length}Reviews)</Typography>
                  </div>
                  <Divider />

                  <div className="price">
                    <Typography>
                      RS:<span>{product.price}</span>
                    </Typography>
                  </div>
                  <div className="no-of-items">
                    <button onClick={handleMinuse}>-</button>
                    <input value={productCount} readOnly={true} />
                    <button onClick={handlePluse}>+</button>

                    <button
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
                          color: product.stock < 1 ? "red" : "green",
                          marginLeft: "10px",
                        }}
                      >
                        {product.stock < 1 ? "OutOfStock" : "InStock"}
                      </b>
                    </p>
                  </div>

                  <div className="des">
                    <Typography varient="h1" className="description">
                      Description
                    </Typography>
                    <div>{product.description}</div>
                  </div>
                  <button className="submit-button">Submit Review</button>
                </Item>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={2}>
              <div className="review-heading">
                <Typography variant="h5">Product Reviews</Typography>
                <Grid item sm={10} xs={2}>
                  {product.reviews?.length ? (
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
