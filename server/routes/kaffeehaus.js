const express = require('express');
// Controllers Importieren
const { getEvents } = require('../controllers/kaffeehaus');

const router = express.Router();

// Routs
// z.B. router.get('/cars', getCars);
router.get('/events', getEvents);

// Export router
module.exports = router;
