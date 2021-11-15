const asyncHandler = require('express-async-handler');
const kaffeehaus = require('../model/kaffeehaus');

// Get Events
const getEvents = asyncHandler(async (req, res) => {
  // Der Code und die Daten von getEvents werden hier abgespeichert
  const { code, data } = await kaffeehaus.getEvents();
  res.status(code).json(data);
});

// Create Events
const createEvent = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.createEvent();
  res.status(code).json(data);
});

// Create Bewertungen
const createBewertung = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.createBewertung();
  res.status(code).json(data);
});

// Create Lokal
const createClub = asyncHandler(async (req, res) => {
  const { code, data } = await kaffeehaus.createClub();
  res.status(code).json(data);
});

module.exports = { getEvents, createEvent, createClub, createBewertung };
