const express = require('express');
const router = express.Router();
const storesData = require('../data/stores.json');

// GET /api/v1/partners/stores
router.get('/stores', (req, res) => {
  const { lat, lon, limit } = req.query;
  
  // Здесь можно добавить логику сортировки по расстоянию (если переданы lat/lon)
  
  let result = storesData.stores;
  
  // Применить лимит
  if (limit && !isNaN(limit)) {
    result = result.slice(0, parseInt(limit));
  }
  
  res.json({
    status: 'success',
    data: {
      stores: result
    }
  });
});

// GET /api/v1/partners/stores/:id (детально по одному магазину)
router.get('/stores/:id', (req, res) => {
  const store = storesData.stores.find(s => s.id === req.params.id);
  
  if (!store) {
    return res.status(404).json({
      status: 'error',
      message: 'Магазин не найден'
    });
  }
  
  res.json({
    status: 'success',
    data: store
  });
});

module.exports = router;