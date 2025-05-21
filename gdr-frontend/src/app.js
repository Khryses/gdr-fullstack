require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const characterRoutes = require('./routes/characterRoutes');
const statRoutes = require('./routes/statRoutes');
const xpRoutes = require('./routes/xpRoutes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const { setupSocket } = require('./socket');
setupSocket(io);
const { requireRole } = require('./middleware/authRole');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/protected', requireRole('master'), protectedRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api', requireRole('admin'), statRoutes);
app.use('/api', requireRole('admin'), xpRoutes);

app.get('/', (req, res) => res.send('GDR Backend running...'));

server.listen(3001, () => console.log('Server running on http://localhost:3001'));
