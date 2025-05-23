
# EODUM - Setup Localhost

## 1. Requisiti
- Node.js 18+
- Docker + Docker Compose
- PostgreSQL locale (opzionale se non usi Docker)

## 2. Configura l'ambiente

Rinomina `.env.example` in `.env` nella cartella `backend`:

```
cp backend/.env.example backend/.env
```

## 3. Avvia con Docker

```
docker-compose up --build
```

## 4. Inizializza il database

Entra nel container backend oppure localmente ed esegui:

```
cd backend
node scripts/initDb.js
```

## 5. Avvia il gioco

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

---

## Admin iniziale

Email: `admin@eodum.gdr`  
Password: (vedi `initDb.js`, è già criptata)

Buon gioco!
