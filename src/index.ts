import express from 'express';
import { collectDefaultMetrics, register } from 'prom-client';

const app = express();
const PORT = process.env.PORT || 3000;

collectDefaultMetrics();

app.get('/', (req, res) => {
  res.json({ mensaje: 'Aplicación funcionando correctamente', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
