import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useSelector, useDispatch } from "react-redux";
import Carousel from 'react-material-ui-carousel'
import {getProductDetails} from '../../actions/productAction'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

const options={
  edit:false,
  color:"rgba(20,20,20,0.1)",
  activeColor:"tomato",
  value:2.5,
  isHalf:true,
  size:window.innerWidth < 600 ? 13 : 25,
}
const Img = styled('img')({
  margin: 'none',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  height:'auto',
  width:'100'

});

const ProdcutDetails = ({match}) => {
  const params= useParams()
  console.log(params)

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.productDetails);
  
  useEffect(()=>{
    dispatch(getProductDetails(params.id))
  },[dispatch,params])
    return (
        <>
        <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container  direction={'row'} spacing={2}>
        <Grid item >
          <Carousel>
            {
              product.images&& product.images.map((item,i)=>(
                <Img alt={`${i} Slide`}
                src={item.url}
                key={item.url} />
              ))
            }
          </Carousel>
           
          
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="h1">
                {product.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {product._id}
              </Typography>
              <ReactStars options/>
              <span>({product.numOfReviews} Reviews)</span>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="h2">
              {product.price}
            </Typography>
            <p>
            <Typography variant="subtitle1" component="h2">
              Status: 
              {product.Stock< 1 ? "OutOfStock":"InStock"}
            </Typography>
            </p>
           
          </Grid>
        </Grid>
      </Grid>
    </Paper>

        </>
    );
};

export default ProdcutDetails;