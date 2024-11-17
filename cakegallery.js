import React from 'react';
import CakeCard from '../components/CakeCard';

function CakeGallery() {
  // Sample data, replace with API calls if needed
  const cakes = [
    { id: 1, name: 'Chocolate Cake', description: 'Rich chocolate flavor', price: 20 },
    { id: 2, name: 'Vanilla Cake', description: 'Classic vanilla taste', price: 15 },
  ];

  return (
    <div>
      <h2>Cake Gallery</h2>
      <div className="cake-gallery">
        {cakes.map(cake => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
}

export default CakeGallery;
