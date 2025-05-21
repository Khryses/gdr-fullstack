function setupSocket(io) {
  io.on('connection', (socket) => {
    console.log('🟢 Nuovo utente connesso');

    socket.on('new event', (data) => {
      io.emit('notification', { message: `Nuovo evento: ${data.title}` });
    });

    socket.on('disconnect', () => {
      console.log('🔴 Utente disconnesso');
    });
  });
}

module.exports = { setupSocket };