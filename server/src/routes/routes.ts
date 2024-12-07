import express from 'express';
import pool from '../config/db_config/db';

const router = express.Router();

router.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({
      success: true,
      message: 'Database connected successfully!',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Database connection error:', error);
    if(error instanceof Error)
    res.status(500).json({
      success: false,
      message: 'Database connection failed.',
      error: error.message,
    });
  }
});

export default router;
