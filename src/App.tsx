import {Container, Box} from '@mui/material';
import './App.css';
import ProductList from "./components/ProductList";
import Appbar from "./components/Appbar";
import useStateWithStorage from "./hooks/useStateWithStorage";
import {CartItem} from "./models/CartItem";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useStateWithStorage<CartItem[]>('cart', []);

  return (
    <div className="App">
      <Router>
        <Appbar cart={cart}/>
        <Container maxWidth="lg">
          <Box sx={{paddingTop: '64px'}}>
            <Routes>
              <Route path="/" element={<ProductList cart={cart} setCart={setCart}/>}/>
              <Route path="/product/:id" element={<ProductDetails setCart={setCart} cart={cart}/>}/>
              <Route path="/cart" element={<Cart cart={cart}/>}/>
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
};

export default App;
