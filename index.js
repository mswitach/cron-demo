// index.js
import express from "express";
const app = express();

// ✔️ Health-check liviano
app.get("/", (_req, res) => res.type("text/plain").send("alive"));

app.get("/tarea-diaria", (_req, res) => {
  console.log("Cron ejecutado:", new Date().toISOString());
  res.type("text/plain").send("OK");   // 2 bytes
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Servidor en ${PORT}`));

