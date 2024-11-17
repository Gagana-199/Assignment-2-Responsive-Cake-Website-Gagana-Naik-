import React from 'react';

function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default Checkout;
