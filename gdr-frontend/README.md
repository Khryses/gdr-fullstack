# 🎮 GDR Frontend (React + Vite)

Frontend modulare per il gioco di ruolo online. Include:

- Routing protetto
- Ruoli e dashboard dinamica
- Editor e pannelli interattivi
- Tema scuro + responsive

## 🚀 Setup

```bash
cd gdr-frontend
npm install
npm run dev
```

## 🔐 JWT

Il token JWT viene gestito automaticamente via `localStorage`.

## 🧩 Moduli principali

- `DashboardPage.jsx` — Dashboard utente
- `CharacterSheet.jsx` — Scheda personaggio con tab
- `ProtectedRoute.jsx` — Accesso condizionato per ruoli
- `api.js` — Axios wrapper con interceptor token