import React from 'react';
import { useParams } from 'react-router-dom';

function CakeDetails() {
  const { id } = useParams();
  // Simulated data fetch
  const cake = { id, name: 'Sample Cake', description: 'Detailed description', price: 25 };

  return (
    <div>
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default CakeDetails;
