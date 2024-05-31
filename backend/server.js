const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // This allows all CORS requests
app.use(express.json());

// PostgreSQL Pool setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Routes
app.get('/drinks', async (req, res) => {
  const { name, ingredient } = req.query;

  try {
    let result;
    if (name) {
      result = await pool.query('SELECT * FROM drinks WHERE name ILIKE $1', [`%${name}%`]);
    } else if (ingredient) {
      result = await pool.query(`
        SELECT d.* FROM drinks d
        JOIN drink_ingredients di ON d.id = di.drink_id
        JOIN ingredients i ON di.ingredient_id = i.id
        WHERE i.name ILIKE $1
      `, [`%${ingredient}%`]);
    }

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/drinks/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM drinks WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
