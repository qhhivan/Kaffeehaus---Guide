/* eslint operator-linebreak: ["error", "after"] */

const asyncHandler = require('express-async-handler');
const kaffeehaus = require('../model/kaffeehaus');

// GET
// Alle Lokale und deren avg Bewertungen
const getClubs = asyncHandler(async (req, res) => {
  res.status(200).json(await kaffeehaus.getClubs());
});

// Alle Bewertungen
const getBewertungen = asyncHandler(async (req, res) => {
  res.status(200).json(await kaffeehaus.getBewertungen());
});

// Alle Infos (Infos, Events, Bewertungen) über ein Lokal
const getClub = asyncHandler(async (req, res) => {
  const rows = await kaffeehaus.getClub(req.params.id);
  if (rows.club.length === 0) {
    res.status(404).send(`Club ${req.params.id} does not exist`);
  }
  res.status(200).json(rows);
});

// Get Events
const getEvents = asyncHandler(async (req, res) => {
  res.status(200).json(await kaffeehaus.getEvents());
});
// ----------------------

// INSERT
// Create Events
const createEvent = asyncHandler(async (req, res) => {
  const { title, description, time, date, lokalId } = req.body;
  console.log(!title);
  if (!title || !description || !time || !date || !lokalId) {
    res.status(400).send('One or more properties missing');
  } else {
    res
      .status(201)
      .json(
        await kaffeehaus.createEvent(title, description, time, date, lokalId),
      );
  }
});

// Create Bewertungen
const createBewertung = asyncHandler(async (req, res) => {
  res.status(201).json(await kaffeehaus.createBewertung(req.body));
});

// Create Lokal
const createClub = asyncHandler(async (req, res) => {
  const { address, website, music, phoneNumber, price, name, openingHours } =
    req.body;
  if (
    !address ||
    !website ||
    !music ||
    !phoneNumber ||
    !price ||
    !name ||
    !openingHours
  ) {
    res.status(400).send('One or more properties missing');
  }
  // if (price.length > 3) {
  //   res.status(400).send('Price is to Long');
  // }
  const rows = await kaffeehaus.getClub(name);
  if (rows.length > 0) res.status(200).send(`Club ${name} already exists`);
  else {
    res.status(200).json(await kaffeehaus.createClub(req.body));
  }
});
// ----------------------

// UPDATE
// Update Club
const updateClub = asyncHandler(async (req, res) => {
  // Fehlermeldung
  const rows = await kaffeehaus.getClub(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Club ${req.params.id} does not exist`);
  } else {
    res.status(200).json(await kaffeehaus.updateClub(req.params.id, req.body));
  }
});

// Update Events
const updateEvent = asyncHandler(async (req, res) => {
  const rows = await kaffeehaus.getEvent(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Event ${req.params.id} does not exist`);
  } else {
    res.status(200).json(await kaffeehaus.updateEvent(req.params.id, req.body));
  }
});
// ----------------------

// DELETE
// Delete Club
const deleteClub = asyncHandler(async (req, res) => {
  // Fehlermeldung wenn der Club nicht existiert
  const rows = await kaffeehaus.getClub(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Club ${req.params.id} does not exist`);
  } else {
    await kaffeehaus.deleteClub(req.params.id);
    res.status(200).end();
  }
});

// Delete Events
const deleteEvent = asyncHandler(async (req, res) => {
  // Fehlermeldung wenn das Event nicht existiert
  const rows = await kaffeehaus.getEvent(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Event ${req.params.id} does not exist`);
  } else {
    await kaffeehaus.deleteEvent(req.params.id);
    res.status(200).end();
  }
});
// ----------------------

module.exports = {
  getClubs,
  getEvents,
  getClub,
  getBewertungen,
  createClub,
  createEvent,
  createBewertung,
  updateClub,
  updateEvent,
  deleteEvent,
  deleteClub,
};
