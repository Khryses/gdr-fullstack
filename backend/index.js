const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const statsRoutes = require('./routes/statsRoutes');

dotenv.config();

const app = express();
const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

app.use('/auth', authRoutes);
app.use('/stats', statsRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));