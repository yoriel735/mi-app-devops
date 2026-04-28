"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prom_client_1 = require("prom-client");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, prom_client_1.collectDefaultMetrics)();
app.get('/', (req, res) => {
    res.json({ mensaje: 'Aplicación funcionando correctamente', version: '1.0.0' });
});
app.get('/health', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', prom_client_1.register.contentType);
    res.end(await prom_client_1.register.metrics());
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
//# sourceMappingURL=index.js.map