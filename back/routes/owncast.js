const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_BASE = process.env.OWNCAST_API;
const TOKEN = process.env.OWNCAST_TOKEN;

router.get('/status', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/status`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch status' });
  }
});

module.exports = router;