const express = require('express');
const cors = require('cors');
require('dotenv').config();
const owncastRoutes = require('./routes/owncast');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/owncast', owncastRoutes);

const PORT = 3356;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
