import {CartItem} from "../models/CartItem";
import {Box, Card, CardContent, CardMedia, List, ListItem, Typography} from "@mui/material";
import React from "react";

/**
 * The props type for {@link components/Cart}.
 * @category Component Props
 */
interface CartProps {
  /** The array of {@link models/CartItem} **/
  cart: CartItem[];
}

/**
 *
 * @param cart : The array of {@link models/CartItem} that will contain the information about the products, price, qty
 * in order to sum the total and display it
 */
const Cart: React.FC<CartProps> = ({cart}) => {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 0
  );

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Shopping Cart
      </Typography>
      <Typography variant="h4" gutterBottom>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.product.id}>
            <Card sx={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
              <CardMedia
                component="img"
                sx={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                  padding: '8px',
                }}
                image={item.product.thumbnail}
                alt={item.product.title}
              />
              <CardContent sx={{width: '300px'}}>
                <Typography variant="h6" component="div" gutterBottom>
                  {item.product.title}
                </Typography>
                <Typography gutterBottom>
                  Price: {item.product.price.toFixed(2)}
                </Typography>
                <Typography gutterBottom>
                  Quantity: {item.quantity}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Cart;