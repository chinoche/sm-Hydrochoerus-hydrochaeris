import React from 'react';
import {AppBar, Badge, IconButton, Toolbar, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartItem} from "../models/CartItem";
import {Link} from "react-router-dom";

interface AppBarProps {
  cart: CartItem[];
}

const Appbar: React.FC<AppBarProps> = ({cart}) => {
  const cartItems = cart.length;

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
