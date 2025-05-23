# 🧑‍💻 API Principali

## Autenticazione
- `POST /auth/login`
- `POST /auth/register`

## Personaggi
- `GET /characters`
- `POST /characters`
- `PUT /characters/:id`
- `DELETE /characters/:id`

Tutte le rotte `/characters` sono protette da JWT.