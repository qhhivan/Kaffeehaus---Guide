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
  // Fehlermeldung
  const rows = await kaffeehaus.getClub(req.params.id);
  if (rows.data.club.length === 0) {
    res.status(404).send(`Club ${req.params.id} does not exist`);
  }
  res.status(rows.code).json(rows.data);
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
  // const { code, data } = await kaffeehaus.createEvent(req.body);
  // res.status(code).json(data);

  const { title, description, time, date, lokalId, music } = req.body;
  if (!title || !description || !time || !date || !lokalId || !music) {
    res.status(400).send('One or more properties missing');
  } else {
    res
      .status(201)
      .json(
        await kaffeehaus.createEvent(
          title,
          description,
          time,
          date,
          lokalId,
          music,
        ),
      );
  }
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
  // const { code, data } = await kaffeehaus.createClub(req.body);
  // res.status(code).json(data);

  const { address, website, music, phoneNumber, price, name, openingHours } = req.body;
  if (
    !address
    || !website
    || !music
    || !phoneNumber
    || !price
    || !name
    || !openingHours
  ) {
    res.status(400).send('One or more properties missing');
  }
  const rows = await kaffeehaus.getClub({ name });
  if (rows.length > 0) res.status(200).send(`Club ${name} already exists`);
  else {
    res
      .status(201)
      .json(
        await kaffeehaus.createClub(
          address,
          website,
          music,
          phoneNumber,
          price,
          name,
          openingHours,
        ),
      );
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
    const { code, data } = await kaffeehaus.updateClub(req.params.id, req.body);
    res.status(code).json(data);
  }
});

// Update Events
const updateEvent = asyncHandler(async (req, res) => {
  const rows = await kaffeehaus.getEvent(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Event ${req.params.id} does not exist`);
  } else {
    const { code, data } = await kaffeehaus.updateEvent(
      req.params.id,
      req.body,
    );
    res.status(code).json(data);
  }
});
// ----------------------

// DELETE
// Delete Club
const deleteClub = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  // const { code, data } = await kaffeehaus.deleteClub(req.params.id);
  // res.status(code).json(data);

  // Fehlermeldung wenn der Club nicht existiert

  const rows = await kaffeehaus.getClub(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Club ${req.params.id} does not exist`);
  } else {
    await kaffeehaus.deleteClub(req.params.id);
    res.status(204).end();
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
    res.status(204).end();
  }
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
