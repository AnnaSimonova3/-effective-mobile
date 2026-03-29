const express = require('express');
const cors = require('cors');
const storesRoutes = require('./routes/stores');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.use('/api/v1/partners', storesRoutes);

// Проверка работы сервера
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});