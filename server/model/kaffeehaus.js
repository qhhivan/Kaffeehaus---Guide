/* eslint-disable camelcase */
// Datenbank importieren
const db = require('../db/index.js');

// USER
// Alle Lokale und deren avg Bewertungen
async function getClubs() {
  const { rows } = await db.query(
    'SELECT lokal.id, address, website, music, phone_number, price, name, opening_hours, avg(stars)FROM lokal left join bewertungen b on lokal_id = lokal.id group by lokal.id',
  );
  return rows;
}

async function getEvent(id) {
  const { rows } = await db.query('SELECT * from events where id = $1', [id]);
  return rows;
}

// Alle Events und den Lokalnamen
async function getEvents() {
  const { rows } = await db.query(
    'SELECT l.name, title, description, time, date, lokal_id, events.id as event_id FROM events JOIN lokal l ON events.lokal_id = l.id order by events.id',
  );
  return rows;
}

// Alle Infos (Infos, Events, Bewertungen) über ein Lokal
async function getClub(id) {
  const bewertungen = await (
    await db.query('SELECT * FROM bewertungen WHERE lokal_id = $1', [id])
  ).rows;
  const events = await (
    await db.query('SELECT * FROM events WHERE lokal_id = $1', [id])
  ).rows;
  const club = await (
    await db.query('SELECT * FROM lokal WHERE lokal.id = $1', [id])
  ).rows;

  const rows = { club, events, bewertungen };
  return rows;
}

// ADMIN

// Insert Club
async function createClub(
  address,
  website,
  music,
  phone_number,
  price,
  name,
  opening_hours,
) {
  await db.query(
    'INSERT INTO lokal (address, website, music, phone_number, price, name, opening_hours) values ($1, $2, $3, $4, $5, $6, $7)',
    [address, website, music, phone_number, price, name, opening_hours],
  );
  return 'Erfolgreich Hinzugefügt';
}

// Insert Event
async function createEvent(title, description, time, date, lokal_id, music) {
  console.log(title);
  await db.query(
    'INSERT INTO events (title, description, time, date, lokal_id, music)  values ($1, $2, $3, $4, $5, $6)',
    [title, description, time, date, lokal_id, music],
  );
  return 'Erfolgreich Hinzugefügt';
}

// Inster Bewertung
async function createBewertung(bewertung) {
  await db.query(
    'INSERT INTO bewertungen (stars, description, lokal_id)  values ($1, $2, $3)',
    [bewertung.stars, bewertung.description, bewertung.lokal_id],
  );
  return 'Erfolgreich Hinzugefügt';
}

// Update Club
async function updateClub(id, newClub) {
  await db.query(
    'UPDATE lokal SET (address, website, music, phone_number, price, name, opening_hours)  = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8',
    [
      newClub.address,
      newClub.website,
      newClub.music,
      newClub.phone_number,
      newClub.price,
      newClub.name,
      newClub.opening_hours,
      id,
    ],
  );
  return 'Update Erfolgreich';
}

// Update Events
async function updateEvent(id, newEvent) {
  await db.query(
    'UPDATE events SET (title, description, time, date, music) = ($1, $2, $3, $4, $5) WHERE id = $6',
    [
      newEvent.title,
      newEvent.description,
      newEvent.time,
      newEvent.date,
      newEvent.music,
      id,
    ],
  );
  return 'Update Erfolgreich';
}

// Delete Club
async function deleteClub(id) {
  await db.query('DELETE FROM lokal WHERE id = $1', [id]);
  return 'Löschen Erfolgreich';
}

// Delete Events
async function deleteEvent(id) {
  await db.query('DELETE FROM events WHERE id = $1', [id]);
  return 'Löschen Erfolgreich';
}

// Export
module.exports = {
  getClubs,
  getEvents,
  getClub,
  getEvent,
  createClub,
  createEvent,
  createBewertung,
  updateClub,
  updateEvent,
  deleteEvent,
  deleteClub,
};
