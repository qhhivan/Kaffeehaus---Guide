const asyncHandler = require('express-async-handler');
const kaffeehaus = require('../model/kaffeehaus');

// GET
// Alle Lokale und deren avg Bewertungen
const getClubs = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.getClubs();
  res.status(code).json(data);
});

// Alle Infos (Infos, Events, Bewertungen) über ein Lokal
const getClub = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.getClub();
  res.status(code).json(data);
});

// Get Events
const getEvents = asyncHandler(async (req, res) => {
  // Der Code und die Daten von getEvents werden hier abgespeichert und weitergegeben (res)
  const { code, data } = await kaffeehaus.getEvents();
  res.status(code).json(data);
});
// ----------------------

// INSERT
// Create Events
const createEvent = asyncHandler(async (req, res) => {
  // // Überprüfen: ob price max 3 Zeichen hat
  // if (req.body.price.length > 3) return { code: 500, data: 'Falsche Eingabe' };
  const { code, data } = await kaffeehaus.createEvent(req.body);
  res.status(code).json(data);
});

// Create Bewertungen
const createBewertung = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.createBewertung(req.body);
  res.status(code).json(data);
});

// Create Lokal
const createClub = asyncHandler(async (req, res) => {
  // // Überprüfen: ob price max 3 Zeichen hat
  // if (req.body.price.length > 3) return { code: 500, data: 'Falsche Eingabe' };
  const { code, data } = await kaffeehaus.createClub(req.body);
  res.status(code).json(data);
});
// ----------------------

// UPDATE
// Update Club
const updateClub = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.updateClub(req.body);
  res.status(code).json(data);
});

// Update Events
const updateEvent = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.updateEvent(req.params.id, req.body);
  res.status(code).json(data);
});
// ----------------------

// DELETE
// Delete Club
const deleteClub = asyncHandler(async (req, res) => {
  // const { id } = req.params;

  const { code, data } = await kaffeehaus.deleteClub(req.params.id);
  res.status(code).json(data);
});

// Delete Events
const deleteEvent = asyncHandler(async (req, res) => {
  // const { id } = req.params;

  // console.log(req.params.id);
  const { code, data } = await kaffeehaus.deleteEvent(req.params.id);
  res.status(code).json(data);
});
// ----------------------

module.exports = {
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
};
