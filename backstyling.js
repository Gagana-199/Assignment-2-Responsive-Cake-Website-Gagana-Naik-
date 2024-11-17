/* Styling for header and footer */
header,
footer {
  background-color: #f8f9fa; /* Light background color */
  padding: 1rem; /* Consistent padding */
  text-align: center; /* Centers text */
}

/* Styling for the navigation menu */
nav ul {
  list-style: none; /* Removes default list bullets */
  display: flex; /* Enables horizontal layout */
  justify-content: center; /* Centers the navigation items */
  gap: 1rem; /* Adds space between items */
  padding: 0; /* Removes default padding */
  margin: 0; /* Removes default margin */
}

/* Styling for the cake gallery */
.cake-gallery {
  display: flex; /* Flexible layout for child elements */
  gap: 1rem; /* Adds space between items */
  flex-wrap: wrap; /* Wraps items to the next line if needed */
  justify-content: center; /* Centers gallery content */
  padding: 1rem; /* Adds padding around the gallery */
  margin: 0 auto; /* Centers the gallery within its container */
  max-width: 1200px; /* Restricts the maximum width */
}

/* Styling for individual cake cards */
.cake-card {
  border: 1px solid #ccc; /* Light border for visual separation */
  padding: 1rem; /* Internal padding */
  width: 200px; /* Fixed width for uniformity */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-radius: 8px; /* Rounded corners for a modern look */
  text-align: center; /* Centers text within the card */
  background-color: #fff; /* Consistent background color */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effect */
}

.cake-card:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}
