import React, {useEffect, useState} from 'react';
import {Grid, Card, CardMedia, CardContent, Typography, CircularProgress, Box, Button, Snackbar} from '@mui/material';
import {Pagination} from '@mui/material';
import {fetchProducts} from '../api/products';
import {ProductData} from "../models/ProductData";
import {CartItem} from "../models/CartItem";
import {Product} from "../models/Product";
import {Link} from "react-router-dom";
import {findItemInCart} from "../utils/utils";

interface ProductListProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void
}

const ProductList: React.FC<ProductListProps> = ({cart, setCart}) => {
  // @ts-ignore
  const [productsData, setProductsData] = useState<ProductData>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const limit: number = 10;

  /*
  * Using the isMounted variable to check whether the component is still mounted before updating the state for
  * preventing memory leaks when updating the state when the component is unmounted
  *
  * @return: cleanup function that sets isMounted to false when the component is unmounted :D
  */
  useEffect(() => {
    let isMounted = true;
    const skip = (page - 1) * limit;

    async function fetchData() {
      const data: ProductData = await fetchProducts(skip, limit);
      if (isMounted) {
        setProductsData(data);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
    setLoading(true);
  };

  const addToCart = (product: Product) => {
    const itemAtIndex = findItemInCart(cart, product);
    if (itemAtIndex >= 0) {
      const newCart = [...cart];
      newCart[itemAtIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, {product, quantity: 1}]);
    }
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress/>
      </Box>
    );
  }

  const {products, total} = productsData;
  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <Grid container spacing={3}>
        {products.map((product: Product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <CardMedia component="img" height="140" image={product.thumbnail} alt={product.title}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6">${product.price}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Buy
                </Button>
                <Button
                  component={Link}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="secondary"
                  style={{marginLeft: '10px'}}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination count={totalPages} page={page} onChange={handlePageChange}/>
      </Box>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Added to cart!"
      />
    </>
  );
}

export default ProductList;
