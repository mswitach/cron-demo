// index.js
import express from 'express';
const app = express();

app.get('/tarea-diaria', (_req, res) => {
  console.log('Cron ejecutado:', new Date().toISOString());
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;   // ⬅️  Render inyecta $PORT
app.listen(PORT, '0.0.0.0', () =>        // ⬅️  ¡Importante! host 0.0.0.0
  console.log(`Servidor en ${PORT}`)
);

