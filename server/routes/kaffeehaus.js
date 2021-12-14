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
  getBewertungen,
} = require('../controllers/kaffeehaus');

const router = express.Router();

// GET
router.get('/clubs', getClubs);
router.get('/clubs/:id', getClub);
router.get('/events', getEvents);
router.get('/bewertungen', getBewertungen);

// POST
router.post('/events', createEvent);
router.post('/clubs', createClub);
router.post('/bewertung', createBewertung);

// UPDATE
router.patch('/clubs/:id', updateClub);
router.patch('/events/:id', updateEvent);

// DELETE
router.delete('/clubs/:id', deleteClub);
router.delete('/events/:id', deleteEvent);

// Export router
module.exports = router;
