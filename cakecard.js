import React from 'react';
import { Link } from 'react-router-dom';

function CakeCard({ cake }) {
  return (
    <div className="cake-card">
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
      <Link to={`/cake/${cake.id}`}>View Details</Link>
    </div>
  );
}

export default CakeCard;
