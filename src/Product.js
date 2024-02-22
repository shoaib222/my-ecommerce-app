import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const Product = ({ id, name, price, onAddToCart, onRemoveFromCart }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAddToCart(id)}>Add to Cart</Button>
        <Button size="small" onClick={() => onRemoveFromCart(id)}>Remove from Cart</Button>
      </CardActions>
    </Card>
  );
};

export default Product;