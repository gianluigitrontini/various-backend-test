import express from 'express';
import { userRoutes } from './routes/user.route'; // Adjust path as necessary

const app = express();
const PORT = 3000;

async function initialize() {
  app.use(express.json()); // Add middleware to parse JSON bodies

  // Use the user routes
  app.use('/api/users', userRoutes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Initialize the app
initialize().catch(err => {
  console.error('Error initializing database:', err.message);
});
