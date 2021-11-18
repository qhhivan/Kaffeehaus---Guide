const express = require('express');
// Controllers Importieren
const {
  getClubs,
  getEvents,
  getClub,
  createClub,
  createEvent,
  createBewertung,
  updateClub,
  updateEvent,
  deleteEvent,
  deleteClub,
} = require('../controllers/kaffeehaus');

const router = express.Router();

// GET
router.get('/clubs', getClubs);
router.get('/club', getClub);
router.get('/events', getEvents);

// POST
router.post('/events', createEvent);
router.post('/club', createClub);
router.post('/bewertung', createBewertung);

// UPDATE
router.patch('/club', updateClub);
router.patch('/event', updateEvent);

// DELETE
router.delete('/club/:id', deleteClub);
router.delete('/event/:id', deleteEvent);

// Export router
module.exports = router;
