import React from 'react';

function Cart() {
  // Mock cart items
  const cartItems = [{ id: 1, name: 'Chocolate Cake', price: 20, quantity: 1 }];

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
