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

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api', statRoutes);
app.use('/api', xpRoutes);

app.get('/', (req, res) => res.send('GDR Backend running...'));

server.listen(3001, () => console.log('Server running on http://localhost:3001'));
