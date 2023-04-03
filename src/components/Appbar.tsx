import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartItem} from "../models/CartItem";
import {Link} from "react-router-dom";

/**
 * The props type for {@link components/Appbar}.
 * @category Component Props
 */
interface AppBarProps {
  cart: CartItem[];
}

/**
 *
 * @param cart : The cart, that is basically an array of {@link models/CartItem} so we can display the number of items
 * added to the cart
 * @constructor
 *
 * @category Component
 */
const Appbar: React.FC<AppBarProps> = ({cart}) => {
  /** The number of items added to the cart **/
  const cartItems = cart.length;

  /**
   * The template of the components that will let us interact with the title to go back to the / route and product list
   * or if we want to see the Cart and its content
   */
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
            My mixed Products Store :)
          </Link>
        </Typography>
        <IconButton color="inherit" edge="end" aria-label="cart">
          <Badge badgeContent={cartItems} color="secondary">
            <Link to="/cart" style={{color: 'inherit', textDecoration: 'none'}}>
              <ShoppingCartIcon/>
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
