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

// Alle Lokale und deren avg Bewertungen
// Alle Infos (Infos, Events, Bewertungen) über ein Lokal

// Update Club
// Update Events

// Delete Club
// Delete Events

// Export router
module.exports = router;
