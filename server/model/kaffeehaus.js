// Datenbank importieren
const db = require('../db/index.js');

// USER
// Alle Lokale und deren avg Bewertungen

// Alle Events und den Lokalnamen
async function getEvents() {
  try {
    // Output von einem Select in einer Variable/ Objekt speicher
    const { rows } = await db.query(
      'SELECT name, * FROM events JOIN lokal l ON events.lokal_id = l.id',
    );
    //   Return Statuscode und die daten
    return { code: 200, data: rows };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Alle Infos (Infos, Events, Bewertungen) über ein Lokal

// ADMIN
// Insert Club
// insert into lokal (address, website, music, phone_number, price, name, opening_hours)

async function createClub(club) {
  try {
    // Überprüfen: ob price max 3 Zeichen hat
    // Eig sollte ich die Eingaben am der Frontendüberprüfen / Ob es eine PLZ ist/ Stadt, ...
    // if (club.price.length > 3)
    //   return { code: 500, data: 'Falsche Eingabe' };
    // else
    await db.query(
      'insert into lokal (address, website, music, phone_number, price, name, opening_hours) values ($1, $2, $3, $4, $5, $6, $7)',
      [
        club.address,
        club.website,
        club.music,
        club.phone_number,
        club.price,
        club.name,
        club.opening_hours,
      ],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Insert Event
// insert into events (title, description, time, date, lokal_id)

async function createEvent(event) {
  try {
    await db.query(
      'insert into events (title, description, time, date, lokal_id)  values ($1, $2, $3, $4, $5)',
      [event.title, event.description, event.time, event.date, event.lokal_id],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Inster Bewertung
// insert into bewertungen (stars, description, lokal_id)
async function createBewertung(bewertung) {
  try {
    await db.query(
      'insert into bewertungen (stars, description, lokal_id)  values ($1, $2, $3)',
      [bewertung.stars, bewertung.description, bewertung.lokal_id],
    );

    return { code: 200, data: 'Erfolgreich Hinzugefügt' };
  } catch (error) {
    return { code: 500, data: error.message };
  }
}

// Update Club
// Update Events

// Delete Club
// Delete Events

// Export
module.exports = { getEvents, createClub, createEvent, createBewertung };
