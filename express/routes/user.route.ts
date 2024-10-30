// backend/routes/userRoutes.ts
import { Router } from 'express';
import { initializeExampleDatabase } from '../database.service'; // Adjust path as necessary

const router = Router();

router.use(async (req, res, next) => {
  // Initialize the database connection for every request
  const dbExample = await initializeExampleDatabase();
  req.db = dbExample; // Attach dbExample to the request object
  next();
});

// Route to retrieve all users
router.get('/', async (req, res) => {
  try {
    const rows = await req.db.all('SELECT * FROM users');
    res.json({ users: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to upload mock data   
router.post('/fixtures', async (req, res) => {
  try {
    const row = await req.db.get('SELECT COUNT(*) AS count FROM users');

    if (row.count === 0) {
      // Insert mock data
      const mockUsers = [
        ['Alice', 'alice@example.com', 30],
        ['Bob', 'bob@example.com', 24],
        ['Charlie', 'charlie@example.com', 29]
      ];

      for (const user of mockUsers) {
        await req.db.run('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', user);
      }

      console.log('Inserted mock data into users table');
    } else {
      console.log('Users table already has data, skipping mock data insertion');
      return res.status(400).json({ error: "Users table already has data, skipping mock data insertion" });
    }

    // Query all users and return them in the response
    const users = await req.db.all('SELECT * FROM users');
    res.json(users);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete all users
router.delete('/', async (req, res) => {
  try {
    await req.db.exec('DELETE FROM users');
    res.json({ message: 'All users deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export the router
export { router as userRoutes };
