import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from './Product';

const products = [
  { id: 1, name: 'T-Shirt', price: 15.99 },
  { id: 2, name: 'Jeans', price: 29.99 },
  { id: 3, name: 'Sweater', price: 24.99 },
  { id: 4, name: 'Dress', price: 39.99 },
  { id: 5, name: 'Jacket', price: 49.99 },
  { id: 6, name: 'Skirt', price: 19.99 },
  { id: 7, name: 'Hoodie', price: 34.99 },
  { id: 8, name: 'Shorts', price: 14.99 },
  { id: 9, name: 'Coat', price: 59.99 },
  { id: 10, name: 'Sweatpants', price: 24.99 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(p => p.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product
              {...product}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <h2>Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default App;