import {Container, Box} from '@mui/material';
import './App.css';
import ProductList from "./components/ProductList";
import Appbar from "./components/Appbar";
import useStateWithStorage from "./hooks/useStateWithStorage";
import {CartItem} from "./models/CartItem";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

/**
 * Renders the base App for the application, which will be used by the React entry point.
 * Here we can define the providers or the states that can be passed as parameters to other components
 *
 * Here we can see that the routed have been defined for {@link components/ProductList}
 *
 * ```tsx
 * <App/>
 * ```
 **
 * @category Component
 */
const App = () => {
  /**
   * The definition of the custom hook for this project, this will handle the state for the cart, so it can be passed to
   * other components depending on what is planned to do
   */
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
