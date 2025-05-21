# 📘 GDR Fullstack Modular System

Sistema di gioco di ruolo fullstack, completamente modulare, con ruoli avanzati, editor dinamico, socket realtime e dashboard personalizzata.

---

## 🚀 Tecnologie
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Realtime:** Socket.IO
- **UI:** Dark Mode + responsive
- **Autenticazione:** JWT (da implementare)
- **Ruoli:** gestore, narratore, moderatore, guida, player

---

## 📁 Struttura del progetto

```
gdr-full/
├── backend/
│   ├── src/
│   │   ├── app.js               # Entry point Express
│   │   ├── routes/              # Rotte API
│   │   ├── middleware/          # Middleware auth e ruoli
│   │   ├── socket.js            # Socket.IO setup
│   ├── .env.example             # Variabili ambiente
├── gdr-frontend/
│   ├── src/
│   │   ├── App.jsx              # Routing base
│   │   ├── components/          # UI modulari
│   │   ├── pages/               # Pagine principali
│   │   ├── contexts/            # AuthContext
│   │   ├── services/            # Axios API wrapper
```

---

## ⚙️ Setup locale

### 1. Clona il progetto
```bash
git clone https://github.com/tuo-utente/gdr-full.git
```

### 2. Configura le variabili ambiente
Copia `.env.example` ➜ `.env` e inserisci le credenziali MongoDB e JWT:

```
cp .env.example .env
```

### 3. Avvia il backend
```bash
cd backend
npm install
npm run dev
```

### 4. Avvia il frontend
```bash
cd backend/gdr-frontend
npm install
npm run dev
```

---

## 🔑 Ruoli e Permessi

| Ruolo        | Permessi principali |
|--------------|---------------------|
| `gestore`    | Tutto               |
| `moderatore` | Abilità, dadi       |
| `narratore`  | Quest, eventi       |
| `guida`      | Supporto giocatori  |
| `player`     | Base                |

---

## 🌐 Deployment

### Frontend: [Vercel](https://vercel.com)
- Importa progetto da GitHub
- Imposta `VITE_API_BASE_URL` in ambiente

### Backend: [Render](https://render.com)
- Import da GitHub
- Imposta variabili: `PORT`, `MONGODB_URI`, `JWT_SECRET`
- Porta: 3001

---

## 📄 Licenza
MIT — Usa, condividi e modifica liberamente!