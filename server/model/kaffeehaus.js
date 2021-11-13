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
// Insert Event
// Inster Bewertung

// Update Club
// Update Events

// Delete Club
// Delete Events

// Export
module.exports = { getEvents };
