const express = require('express');
// Controllers Importieren
const {
  getEvents,
  createEvent,
  createBewertung,
  createClub,
} = require('../controllers/kaffeehaus');

const router = express.Router();

// Routes
// z.B. router.get('/cars', getCars);
router.get('/events', getEvents);
router.post('/events', createEvent);
router.post('/club', createClub);
router.post('/bewertung', createBewertung);

// Export router
module.exports = router;
