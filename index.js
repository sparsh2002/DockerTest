// Import the Express module
const express = require('express');

// Create a new instance of Express
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
