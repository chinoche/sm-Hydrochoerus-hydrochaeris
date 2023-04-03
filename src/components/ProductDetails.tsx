import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {fetchProduct} from '../api/products';
import {Product} from "../models/Product";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {CartItem} from "../models/CartItem";
import {findItemInCart} from "../utils/utils";

interface ProductDetailsProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({cart, setCart}) => {
  const {id} = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);


  useEffect(() => {
    async function fetchData() {
      // @ts-ignore
      const data: Product = await fetchProduct(parseInt(id));
      setProduct(data);
    }

    fetchData();
  }, [id]);

  const addToCart = (product: Product) => {
    const itemAtIndex = findItemInCart(cart, product);
    if (itemAtIndex >= 0) {
      const newCart = [...cart];
      newCart[itemAtIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, {product, quantity: 1}]);
    }
  }


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {product.title}
      </Typography>
      <Grid container spacing={2}>
        {product.images.map((url, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={url}
                alt={`Product ${index}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price: ${product.price}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Disccount %: {product.discountPercentage}%
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Rating: {product.rating}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Stock: {product.stock}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Brand: {product.brand}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Category: {product.category}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Buy
        </Button>
      </CardContent>
    </div>
  );
};

export default ProductDetails;